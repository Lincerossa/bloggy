import React from 'react'
import { mount } from 'enzyme'

import Padder from './index'

describe('<Padder />', () => {
  it('It should render even without childs', () => {
    expect(mount(<Padder />).exists()).toEqual(true)
  })
  it('It should render its child correcty', () => {
    const GG = mount(
      <Padder>
        <p>child</p>
      </Padder>,
    )
    expect(GG.exists()).toEqual(true)
    expect(GG.find('p').exists()).toEqual(true)
    expect(GG.find('p').length).toEqual(1)
  })
  it('It should receive its props correcty', () => {
    const GG = mount(
      <Padder size="big">
        <p>child</p>
      </Padder>,
    )
    expect(GG.exists()).toEqual(true)
    expect(GG.props().size).toEqual('big')
  })
})
