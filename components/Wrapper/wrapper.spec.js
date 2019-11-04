import React from 'react'
import { mount } from 'enzyme'

import Wrapper from './index'

describe('<Wrapper />', () => {
  it('It should render even without childs', () => {
    expect(mount(<Wrapper></Wrapper>).exists()).toEqual(true)
  })
  it('It should render its child correcty', () => {
    const GG = mount(
      <Wrapper>
        <p>child</p>
      </Wrapper>
    )
    expect(GG.exists()).toEqual(true)
    expect(GG.find('p').exists()).toEqual(true)
    expect(GG.find('p').length).toEqual(1)
  })
  it('It should receive its props correcty', () => {
    const GG = mount(
      <Wrapper size="big">
        <p>child</p>
      </Wrapper>
    )
    expect(GG.exists()).toEqual(true)
    expect(GG.props().size).toEqual('big')
  })
})
