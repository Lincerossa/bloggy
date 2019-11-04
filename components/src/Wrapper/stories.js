import React from 'react'
import { storiesOf } from '@storybook/react'
import Wrapper from './index'

const GG = () => <div style={{ border: '1px solid black' }}>test</div>

storiesOf('Wrapper', module)
  .add('default', () => (
    <Wrapper>
      <GG />
    </Wrapper>
  ))
  .add('small', () => (
    <Wrapper size="small">
      <GG />
    </Wrapper>
  ))
  .add('regular', () => (
    <Wrapper size="regular">
      <GG />
    </Wrapper>
  ))
  .add('big', () => (
    <Wrapper size="big">
      <GG />
    </Wrapper>
  ))
