import React from 'react'
import { Input } from 'antd'

export default ({ value, onChange, name, type, onClick, onBlur, disabled, placeholder }) => (
  <Input
    value={value}
    onChange={onChange}
    name={name}
    type={type}
    onClick={onClick}
    onBlur={onBlur}
    disabled={disabled}
    placeholder={placeholder}
  />
)
