import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Datepicker from './index'
// to study: https://reactdatepicker.com/
const props = {
  type: 'text',
  label: 'label',
  name: 'nameRadio',
  values: null,
  setFieldValue: action('set'),
}

storiesOf('Input:Datepicker', module)
  .add('default', () => <Datepicker {...props} />)
  .add('disabled', () => <Datepicker disabled {...props} />)
  .add('with placeholder', () => (
    <Datepicker {...props} placeholder="click and select a date" />
  ))
