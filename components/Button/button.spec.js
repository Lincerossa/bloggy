import React from 'react'
import { mount, shallow, render } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import Button from './index'

import theme from '../../styles/theme'

describe('<Button />', () => {
  it('Component should be rendered', () => {
    const tree = mount(
      <ThemeProvider theme={theme}>
        <Button>button</Button>
      </ThemeProvider>
    )
    expect(tree.exists()).toBe(true)
  })
})
