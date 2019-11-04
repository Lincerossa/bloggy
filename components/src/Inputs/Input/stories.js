import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './index'

const props = {
  type: 'text',
  label: 'label',
  name: 'inputtone',
  value: null,
  onChange: action('clicked'),
  placeholder: 'placeholder',
}

storiesOf('Input:Input', module)
  .add('default', () => <Input {...props} />)
  .add('disabled', () => <Input disabled {...props} />)
  .add('placeholder', () => <Input {...props} />)
  .add('with value', () => <Input {...props} value="default value" />)
