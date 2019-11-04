import styled from 'styled-components'

export const Accordion = styled.div``
export const AccordionSection = styled.div`
  background-color: #e1e9ef;
  margin-bottom: ${props => (props.isLast ? '0' : '2em')};
`
export const AccordionHead = styled.div`
  cursor: pointer;
  color: #003b66;
  font-size: 16;
  font-weight: 600;
  font-family: 'Open Sans';
  padding: 1em 1.25em 1em 1.25em;
`
export const AccordionBody = styled.div`
  background-color: #f0f4f7;
  padding: 1em 1.25em 1em 1.25em;
`
