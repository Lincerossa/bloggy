import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import Accordion from './index'

import theme from '../../styles/theme'
import * as S from './styles'

describe('<Accordion />', () => {
  it('Accordion Component should be rendered', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Accordion>
          <div label={'Alcani General Formulas'}>
            <p>CnH2n+2</p>
          </div>
        </Accordion>
      </ThemeProvider>
    )

    expect(wrapper.find(Accordion).exists()).toBe(true)
  })

  it('Accordion Component should mount Body when Head is clicked', () => {
    const accordion = mount(
      <ThemeProvider theme={theme}>
        <Accordion>
          <div label="Alcani">
            <p>
              <strong>CH4</strong>Metano
            </p>
            <p>
              <strong>C2H6</strong>Etano
            </p>
            <p>
              <strong>C3H8</strong>Propano
            </p>
          </div>
        </Accordion>
      </ThemeProvider>
    )

    expect(accordion.find(S.AccordionBody).exists()).toBe(false)
    accordion.find(S.AccordionHead).simulate('click')
    expect(accordion.find(S.AccordionBody).exists()).toBe(true)
  })

  it('Accordion component should mount Body if specified in activeIds', () => {
    const accordion = mount(
      <ThemeProvider theme={theme}>
        <Accordion activeIds={[0, 1]}>
          <div label="Alcani">
            <p>
              <strong>CH4</strong>Metano
            </p>
            <p>
              <strong>C2H6</strong>Etano
            </p>
            <p>
              <strong>C3H8</strong>Propano
            </p>
          </div>
          <div label="Alcheni">
            <p>
              <strong>C2H4</strong>Etilene
            </p>
            <p>
              <strong>C3H6</strong>Propilene
            </p>
            <p>
              <strong>C4H8</strong>Butene
            </p>
          </div>
          <div label="Alchini">
            <p>
              <strong>C2H2</strong>Etino
            </p>
            <p>
              <strong>C3H4</strong>Propino
            </p>
            <p>
              <strong>C4H6</strong>Butino
            </p>
          </div>
        </Accordion>
      </ThemeProvider>
    )

    expect(accordion.find(S.AccordionSection).length).toEqual(3)
    expect(accordion.find(S.AccordionHead).length).toEqual(3)
    expect(accordion.find(S.AccordionBody).length).toEqual(2)
  })

  it('Accordion Component return the open sections when triggered', () => {
    const openSectionMockCallback = jest.fn(openSections => openSections)

    const accordion = mount(
      <ThemeProvider theme={theme}>
        <Accordion onChangeAccoridionSection={openSectionMockCallback}>
          <div label="Alcani">
            <p>
              <strong>CH4</strong>Metano
            </p>
            <p>
              <strong>C2H6</strong>Etano
            </p>
            <p>
              <strong>C3H8</strong>Propano
            </p>
          </div>
          <div label="Alcheni">
            <p>
              <strong>C2H4</strong>Etilene
            </p>
            <p>
              <strong>C3H6</strong>Propilene
            </p>
            <p>
              <strong>C4H8</strong>Butene
            </p>
          </div>
          <div label="Alchini">
            <p>
              <strong>C2H2</strong>Etino
            </p>
            <p>
              <strong>C3H4</strong>Propino
            </p>
            <p>
              <strong>C4H6</strong>Butino
            </p>
          </div>
        </Accordion>
      </ThemeProvider>
    )

    expect(openSectionMockCallback.mock.calls.length).toBe(1)
    accordion
      .find(S.AccordionHead)
      .first()
      .simulate('click')
    expect(openSectionMockCallback.mock.calls.length).toBe(2)
    expect(openSectionMockCallback.mock.results[1].value[0]).toEqual(0)
  })
})
