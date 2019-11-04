import styled from 'styled-components'

export const List = styled.div.attrs({
  className: 'List',
})`
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.div`
  flex-basis: ${props => `calc(100%/${props.columns})`};
`
