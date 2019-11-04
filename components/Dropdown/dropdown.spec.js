import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import DropDown from './index'

import theme from '../../styles/theme'

const MountForm = (props) => mount(
  <ThemeProvider theme={theme}>
    <DropDown {...props} />
  </ThemeProvider>,
)

describe('Dropdown', () => {
  it('it should rendere', () => {
    const props = {
      label: 'My Dropdwon',
      item: [],
      onClick: () => {},
    }
    return expect(MountForm(props).exists()).toEqual(true)
  })
})
