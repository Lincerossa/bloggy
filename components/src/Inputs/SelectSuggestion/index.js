import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Downshift from 'downshift'
import { Input, Menu } from 'antd'
import Overlay from 'react-bootstrap/Overlay'
import SuggestionsRelationships from './SuggestionsRelationships'
import * as S from './styles'

function useDebounce(searchValue, delay) {
  const [debouncedValue, setDebouncedValue] = useState(searchValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [searchValue])

  return debouncedValue
}

function objToString(obj) {
  if (obj == null) return ''

  if (typeof obj === 'string') return obj

  // eslint-disable-next-line no-prototype-builtins
  if (obj.hasOwnProperty('value')) return obj.value
  return obj
}

const Suggestions = (props) => {
  const {
    isOpen,
    isLoading,
    selectedItem,
    inputValue,
    suggestions,
    highlightedIndex,
    setSuggestionsIndex,
    setSearchValue,
    getItemProps,
    isForInsert,
    forInsertText,
    noDataText,
    setShowRel,
  } = props

  if (isLoading) {
    return (
      <Menu.Item {...props} disabled>
        Loading...
      </Menu.Item>
    )
  }

  if (!isOpen) {
    setShowRel(isOpen)
    return null
  }

  setSearchValue(inputValue)

  if (!suggestions) return null

  const InsertItem = () => (
    <div id="suggestionsFixedBottom">
      <Menu.Item
        {...props}
        {...getItemProps({
          key: { value: inputValue },
          index: suggestions.length,
          item: { value: inputValue },
          style: {
            backgroundColor: highlightedIndex === suggestions.length ? 'lightgray' : 'white',
          },
        })}
      >
        {`${forInsertText} ${inputValue}`}
      </Menu.Item>
    </div>
  )

  if (suggestions.length > 0) {
    setSuggestionsIndex(highlightedIndex)

    const suggs = suggestions.map((sugg, index) => (
      <Menu.Item
        {...props}
        {...getItemProps({
          key: JSON.stringify(sugg),
          index,
          item: sugg,
          style: {
            backgroundColor: highlightedIndex === index ? '#e5e5e5' : 'white',
            fontWeight: selectedItem === sugg ? 'bold' : 'normal',
          },
        })}
        key={JSON.stringify(sugg)}
      >
        {sugg.value}
      </Menu.Item>
    ))

    return [
      <S.SuggestionsWrapper items={suggestions.length}>{suggs}</S.SuggestionsWrapper>,
      ...(isForInsert && inputValue !== '' ? [<InsertItem />] : []),
    ]
  }

  if (suggestions.length === 0) {
    setShowRel(false)
    return [
      <S.SuggestionsWrapper>
        <Menu.Item {...props} disabled>
          {noDataText}
        </Menu.Item>
      </S.SuggestionsWrapper>,
      ...(isForInsert && inputValue !== '' ? [<InsertItem />] : []),
    ]
  }
  return null
}

const SearchBar = (props) => {
  const {
    placeholder,
    getSuggestions,
    disabled,
    isForInsert,
    forInsertText,
    noDataText,
    name,
    value,
    setFieldValue,
    setFieldTouched,
    // error,
  } = props

  const [searchValue, setSearchValue] = useState((value && value.value) || '')
  const [suggestions, setSuggestions] = useState([])
  const [searchSuggestions, setSearchSuggestions] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [suggestionsIndex, setSuggestionsIndex] = useState(-1)
  const [relationships, setRelationships] = useState(null)
  const [showRel, setShowRel] = useState(false)
  const debouncedSearchValue = useDebounce(searchValue, 500)

  const targetForRelPopover = useRef(null)
  const searchBarRef = React.createRef()

  useEffect(() => {
    if (suggestionsIndex == null || suggestionsIndex === -1 || suggestionsIndex >= suggestions.length) {
      return
    }

    const suggObj = suggestions[suggestionsIndex]
    // eslint-disable-next-line no-prototype-builtins
    setRelationships(suggObj.hasOwnProperty('keyRef') ? suggObj.keyRef : [])

    setShowRel(
      suggestions
        && suggestions.length > 0
        && suggObj.keyRef
        && ((suggObj.keyRef.exceptions && suggObj.keyRef.exceptions.length > 0)
          || (suggObj.keyRef.attributes && suggObj.keyRef.attributes.length > 0)
          || (suggObj.keyRef.dynamicUsages && suggObj.keyRef.dynamicUsages.length > 0)
          || (suggObj.keyRef.staticUsages && suggObj.keyRef.staticUsages.length > 0)),
    )
  }, [suggestionsIndex])

  async function handleSetSuggestions(e) {
    setIsLoading(true)
    const result = await getSuggestions(e)
    setIsLoading(false)
    setSuggestions(result)
  }

  useEffect(() => {
    if (!searchSuggestions) return
    if (debouncedSearchValue) {
      setSearchSuggestions(true)
      handleSetSuggestions(debouncedSearchValue)
    } else {
      setSuggestions([])
    }
  }, [debouncedSearchValue])

  const callSearchFunction = (e) => {
    if (typeof item === 'string' && isForInsert) return

    setFieldValue(name, e.currentTarget.value)
  }

  const callSearchFunctionFromSuggestion = (item) => {
    setFieldValue(name, item)
  }

  function stateReducer(state, changes) {
    if (changes.type === Downshift.stateChangeTypes.mouseUp) {
      return { ...changes, isOpen: true, inputValue: searchBarRef.current.props.value }
    }
    // else if (changes.type === Downshift.stateChangeTypes.changeInput) {
    //     return {...changes, isOpen: true}
    // }
    return changes
  }

  const onBlur = (e) => {
    const { currentTarget } = e

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setFieldTouched(name, true)
      }
    }, 0)
  }

  return (
    <div>
      <div className="form-group has-search" onBlur={(e) => onBlur(e)}>
        <span className="form-control-feedback" />
        <Downshift
          initialSelectedItem={searchValue}
          stateReducer={stateReducer}
          itemToString={(item) => objToString(item)} // custom implementation of item to string, due to the fact that item is an object
          onSelect={(item) => callSearchFunctionFromSuggestion(item)}
        >
          {({ getInputProps, getMenuProps, getItemProps, isOpen, selectedItem, inputValue, highlightedIndex }) => (
            <div>
              <Input
                className="form-control"
                ref={searchBarRef}
                placeholder={placeholder}
                size="large"
                value={searchValue}
                onKeyPress={(e) => e.key === 'Enter' && callSearchFunction(e)}
                disabled={disabled}
                {...getInputProps()}
              />
              <div ref={targetForRelPopover}>
                <Menu {...getMenuProps()}>
                  <Suggestions
                    isOpen={isOpen}
                    isLoading={isLoading}
                    selectedItem={selectedItem}
                    inputValue={inputValue}
                    suggestions={suggestions}
                    highlightedIndex={highlightedIndex}
                    setSuggestionsIndex={setSuggestionsIndex}
                    setSearchValue={setSearchValue}
                    getItemProps={getItemProps}
                    isForInsert={isForInsert}
                    forInsertText={forInsertText}
                    noDataText={noDataText}
                    setShowRel={setShowRel}
                  />
                </Menu>
              </div>
            </div>
          )}
        </Downshift>
      </div>
      {relationships && (
        <Overlay target={targetForRelPopover.current} show={showRel} placement="right">
          <div className="relationship-popover">
            <SuggestionsRelationships relationships={relationships} />
          </div>
        </Overlay>
      )}
    </div>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search for...',
  disabled: false,
  isForInsert: true,
  forInsertText: 'Add translation: ',
  noDataText: 'NO DATA AVAILABLE',
  value: null,
}

SearchBar.props = {
  placeholder: PropTypes.string,
  getSuggestions: PropTypes.func.isRequired,
  isForInsert: PropTypes.bool,
  forInsertText: PropTypes.string,
  noDataText: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.object,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func,
  error: PropTypes.bool,
}

export default SearchBar
