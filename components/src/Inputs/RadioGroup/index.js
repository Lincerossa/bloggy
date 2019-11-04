import React from 'react'
import { Radio } from 'antd'
import * as S from './styles'

export default ({ name, value, items, setFieldValue, onBlur, disabled }) => (
  <S.RadioGroup>
    {items
      && items.map((item) => (
        <S.RadioWrapper key={item.value}>
          <Radio
            checked={value === item.value}
            name={name}
            onBlur={onBlur}
            onChange={() => setFieldValue(name, item.value)}
            disabled={disabled}
          >
            {item.label}
          </Radio>
        </S.RadioWrapper>
      ))}
  </S.RadioGroup>
)
