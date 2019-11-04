import React, { useState } from 'react'
import { Menu, Dropdown, Icon } from 'antd'

import Button from '../Button'
import * as S from './styles'

const menu = ({ items, onClick }) => (
  <Menu onClick={onClick}>
    {items
      && items.length > 0
      && items.map(({ icon, content }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Menu.Item key={`${content}_${index}`}>
          <Icon type={icon} />
          {content}
        </Menu.Item>
      ))}
  </Menu>
)

export default ({ items, label, color, size, onClick }) => {
  const [visible, setVisible] = useState(null)
  console.log('ok')
  return (
    <Dropdown
      overlay={menu({ items, onClick })}
      onVisibleChange={(flag) => setVisible(flag)}
      visible={visible}
      trigger={['click']}
    >
      <S.ButtonWrapper>
        <Button size={size} color={color} icon="down">
          {label}
        </Button>
      </S.ButtonWrapper>
    </Dropdown>
  )
}
