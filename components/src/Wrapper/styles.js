import styled from 'styled-components'

export const Wrapper = styled.div`
  ${(props) => (props.size ? 'margin: 0 auto' : 'padding: 0 1rem')};
  width: 100%;

  ${(props) => props.size === 'small' && 'max-width: 200px'};
  ${(props) => props.size === 'regular' && 'max-width: 500px'};
  ${(props) => props.size === 'big' && 'max-width: 900px'};
`
