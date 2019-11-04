import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './index'

storiesOf('List', module)
  .add('default', () => (
    <List>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum doasdlor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
    </List>
  ))
  .add('2 columns', () => (
    <List columns="2">
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum doasdlor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
    </List>
  ))
  .add('3 columns', () => (
    <List columns="3">
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
      <p>lorem ipsum doasdlor sit amet</p>
      <p>lorem ipsum dolor sit amet</p>
    </List>
  ))
