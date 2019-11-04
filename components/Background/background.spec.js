import React from 'react'
import { mount } from 'enzyme'

import Background from './index'

describe('<Background />', () => {
  it('It should render even without childs', () => {
    expect(mount(<Background color="red"></Background>).exists()).toEqual(true)
  })
  it('It should render its child correcty', () => {
    const GG = mount(
      <Background>
        <p>child</p>
      </Background>
    )
    expect(GG.exists()).toEqual(true)
    expect(GG.find('p').exists()).toEqual(true)
    expect(GG.find('p').length).toEqual(1)
  })
  it('It should receive its props correctly', () => {
    expect(mount(<Background color="red"></Background>).props().color).toEqual(
      'red'
    )
  })
})
