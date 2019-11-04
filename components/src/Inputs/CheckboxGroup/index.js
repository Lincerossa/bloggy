import React from 'react'
import { Checkbox } from 'antd'
import * as S from './styles'

export default ({ name, value = [], items, onBlur, setFieldValue, disabled }) => {
  function handleChange(checkedValue) {
    const indexPositionOfAlreadyChecked = value.findIndex((e) => e === checkedValue)

    if (indexPositionOfAlreadyChecked > -1) {
      setFieldValue(name, [
        ...value.slice(0, indexPositionOfAlreadyChecked),
        ...value.slice(indexPositionOfAlreadyChecked + 1),
      ])
      return
    }
    setFieldValue(name, [...value, checkedValue])
  }

  return (
    <S.CheckboxGroup onBlur={onBlur} name={name}>
      {items
        && items.map((item) => (
          <S.CheckboxWrapper key={item.value}>
            <Checkbox
              checked={value.find((e) => e === item.value)}
              name={name}
              id={name}
              onBlur={onBlur}
              disabled={disabled}
              onChange={() => handleChange(item.value)}
            >
              {item.label}
            </Checkbox>
          </S.CheckboxWrapper>
        ))}
    </S.CheckboxGroup>
  )
}
