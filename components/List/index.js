import React from 'react'
import * as S from './styles'

export default ({ columns = 1, children }) => (
  <S.List>
    {React.Children.map(children, (child, index) => {
      return <S.ListItem columns={columns}>{child}</S.ListItem>
    })}
  </S.List>
)
