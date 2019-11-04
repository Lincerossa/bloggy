import styled from 'styled-components'

export const Modal = `
  position: absolute;
  background-color: white;
  top: 25%;
  left: 25%;
  max-width:75%
  right: auto;
  bottom: auto;
  margin-right: -50%;
  overflow: hidden;
`
export const Overlay = `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Title = styled.h3`
  margin: 1em 1em 0 1em;
  padding: 1em 1em 1em 1em;
  text-align: center;
  overflow-y: scroll;
  max-height: 3.125em;
  border-bottom: 1px solid black;
`

export const Body = styled.div`
  margin: 1em 1em 1em 1em;
  overflow-y: scroll;
`

export const Footer = styled.div`
  border-top: 1px solid black;
  max-height: 5.125em;
  margin: 1em 1em 1em 1em;
`
