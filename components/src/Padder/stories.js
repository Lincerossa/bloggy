import React from 'react'
import { storiesOf } from '@storybook/react'
import Padder from './index'

const GG = () => <div style={{ border: '1px solid black' }}>test</div>

storiesOf('Padder', module)
  .add('default', () => (
    <Padder>
      <GG />
    </Padder>
  ))
  .add('small', () => (
    <Padder size="small">
      <GG />
    </Padder>
  ))
  .add('regular', () => (
    <Padder size="regular">
      <GG />
    </Padder>
  ))
  .add('big', () => (
    <Padder size="big">
      <GG />
    </Padder>
  ))
