import React from 'react'
import { Button } from 'antd'

import * as S from './styles'

export default ({ children, color, type = 'primary', ...props }) => (
  <S.Button color={color}>
    <Button type={type} {...props}>
      {children}
    </Button>
  </S.Button>
)
