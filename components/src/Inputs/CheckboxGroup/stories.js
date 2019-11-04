import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Checkbox from './index'
import { getRandomInputItems } from '../../../utility'

const props = {
  type: 'text',
  label: 'label',
  name: 'Checkboxtone',
  value: [],
  items: getRandomInputItems(10, 'checkbox'),
  placeholder: 'placeholder',
  setFieldValue: action('set'),
}

storiesOf('Input:Checkbox', module)
  .add('default', () => <Checkbox {...props} />)
  .add('disabled', () => <Checkbox disabled {...props} />)
  .add('with the first item checked', () => (
    <Checkbox {...props} value={[props.items[0].value]} />
  ))
  .add('with many checkbox checked (1, 2, 5)', () => (
    <Checkbox
      {...props}
      value={[props.items[0].value, props.items[1].value, props.items[4].value]}
    />
  ))
