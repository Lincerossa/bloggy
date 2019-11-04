import React from 'react'

import 'antd/dist/antd.css';

import { Cascader } from 'antd';




function filter(inputValue, path) {
  return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
}

export default ({ name, value, items, setFieldValue, placeholder = "please select" }) =>  {

  function onChange(value, selectedOptions) {
    setFieldValue(name, value)
  }

  return(
    <Cascader
      options={items}
      onChange={onChange}
      placeholder={placeholder}
      showSearch={{ filter }}
      defaultValue={value}
    />
  )
}