import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './index'

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Beautiful Button</Button>
  ))
  .add('dashed', () => (
    <Button type="dashed" onClick={action('clicked')}>
      Beautiful dashed
    </Button>
  ))
  .add('primary', () => (
    <Button type="primary" onClick={action('clicked')}>
      Beautiful primary
    </Button>
  ))
  .add('danger', () => (
    <Button type="danger" onClick={action('clicked')}>
      Beautiful danger
    </Button>
  ))
  .add('icon', () => (
    <Button icon="search" onClick={action('clicked')}>
      Beautiful danger
    </Button>
  ))
  .add('icon and primary', () => (
    <Button icon="search" type="primary" onClick={action('clicked')}>
      Beautiful search and primary
    </Button>
  ))
  .add('large', () => (
    <Button size="large" onClick={action('clicked')}>
      Beautiful large
    </Button>
  ))
  .add('small', () => (
    <Button size="small" onClick={action('clicked')}>
      Beautiful small
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Beautiful disabled
    </Button>
  ))
  .add('disabled and loading', () => (
    <Button disabled loading onClick={action('clicked')}>
      Beautiful disabled
    </Button>
  ))
  .add('no text but loading', () => (
    <Button loading onClick={action('clicked')} />
  ))
  .add('shape circle', () => (
    <Button shape="circle" icon="search" onClick={action('clicked')} />
  ))
  .add('block', () => (
    <Button block onClick={action('clicked')}>
      Beautiful block
    </Button>
  ))

  .add('color green', () => (
    <Button color="green" onClick={action('clicked')}>
      Beautiful violet
    </Button>
  ))
