import styled from 'styled-components'

export const Button = styled.div`
  ${(props) => props.color
    && `
    button {
      color: white;
      background-color: ${props.theme.colors[props.color] && props.theme.colors[props.color].main};
      border-color: transparent;
      &:hover,
      &:focus{
        color: white;
        background-color: ${props.theme.colors[props.color] && props.theme.colors[props.color].active};
        border-color: transparent;
      }
    }      
  `};
`
