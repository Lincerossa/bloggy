import React from 'react'
import { mount } from 'enzyme'

import List from './index'

describe('<List />', () => {
  it('It should render even without childs', () => {
    expect(mount(<List></List>).exists()).toEqual(true)
  })
  it('It should render with one or more children', () => {
    expect(
      mount(
        <List>
          <p>first</p>
        </List>
      ).exists()
    ).toEqual(true)
    expect(
      mount(
        <List>
          <p>first</p>
          <p>second</p>
        </List>
      ).find('p').length
    ).toEqual(2)
    expect(
      mount(
        <List>
          <p>first</p>
          <p>second</p>
        </List>
      ).find('p').length
    ).toEqual(2)
  })
  it('It should receive the props correctly', () => {
    const ListMounted = mount(
      <List columns={3}>
        <p>first</p>
        <p>second</p>
        <p>third</p>
      </List>
    )
    expect(ListMounted.exists()).toEqual(true)
    expect(ListMounted.props().columns).toEqual(3)
  })
})
