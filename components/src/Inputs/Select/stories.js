import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Select from './index'
import { getRandomInputItems } from '../../../utility'

const props = {
  type: 'text',
  label: 'label',
  name: 'mySelectName',
  value: null,
  items: getRandomInputItems(20, 'select'),
  setFieldValue: action('set'),
}

const groupOfOptions = [
  {
    label: 'sublabel 1',
    options: getRandomInputItems(20, 'select'),
  },
  {
    label: 'sublabel 2',
    options: getRandomInputItems(20, 'select'),
  },
  {
    label: 'sublabel 3',
    options: getRandomInputItems(20, 'select'),
  },
]

storiesOf('Input:Select', module)
  .add('default', () => <Select {...props} />)
  .add('Custom placeholder', () => <Select {...props} placeholder="Custom placeholder" />)
  .add('disabled', () => <Select disabled {...props} />)
  .add('with the first option selected', () => <Select {...props} value={props.items[0].value} />)
  .add('with the first option selected disabled', () => <Select disabled {...props} value={props.items[0].value} />)
  .add('with groups of options', () => <Select {...props} label="group of options" items={groupOfOptions} />)

  .add('with groups of options and one is selected', () => (
    <Select {...props} label="group of options" items={groupOfOptions} value={groupOfOptions[0].options[0].value} />
  ))

  .add('with the multiselect functionality available ', () => (
    <Select {...props} isMulti value={[props.items[0].value, props.items[3].value]} />
  ))
  .add(
    'with the multiselect functionality available, options grouped in sub-options and many options are checked',
    () => (
      <Select
        {...props}
        isMulti
        items={groupOfOptions}
        value={[
          groupOfOptions[1].options[0].value,
          groupOfOptions[2].options[3].value,
          groupOfOptions[1].options[3].value,
          groupOfOptions[0].options[3].value,
        ]}
      />
    ),
  )
