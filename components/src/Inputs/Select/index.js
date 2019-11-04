import React from 'react'
import Select from 'react-select'
import * as S from './styles'

const colourStyles = {}

function createDefaultValue(value, items) {
  let CC = items

  if (items.find((item) => item.options)) {
    CC = items.reduce((acc, val) => {
      if (val.options && val.options.length > 0) {
        return [...acc, ...val.options]
      }
      return acc
    }, [])
  }

  if (Array.isArray(value)) {
    return CC.filter((item) => value.find((v) => v === item.value))
  }
  return CC.find((item) => item.value === value)
}

export default ({ name, value, items, setFieldValue, isMulti, setFieldTouched, error, disabled, placeholder }) => {
  function handleChange(option) {
    if (isMulti) {
      // eslint-disable-next-line no-shadow
      setFieldValue(name, option && option.map(({ value }) => value))
      return
    }
    setFieldValue(name, option.value)
  }

  return (
    <S.Select status={error && 'error'}>
      <Select
        isDisabled={disabled}
        defaultValue={value ? createDefaultValue(value, items) : null}
        options={items}
        styles={{ colourStyles }}
        onChange={handleChange}
        isMulti={isMulti}
        onBlur={() => setFieldTouched(name, true)}
        placeholder={placeholder}
      />
    </S.Select>
  )
}
