import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RadioGroup from './index'
import { getRandomInputItems } from '../../../utility'

const props = {
  type: 'text',
  label: 'label',
  name: 'nameRadio',
  value: null,
  items: getRandomInputItems(20, 'radio'),
  placeholder: 'placeholder',
  setFieldValue: action('set'),
}

storiesOf('Input:Radio', module)
  .add('default', () => <RadioGroup {...props} />)
  .add('disabled', () => <RadioGroup disabled {...props} />)
  .add('with one radio checked', () => (
    <RadioGroup {...props} value={props.items[0].value} />
  ))
