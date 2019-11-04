import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Dropdown from './index'

const items = Array.from({ length: 15 }, () => (Math.random() > 0.5 ? { icon: 'user', content: 'lorem' } : { icon: 'down', content: 'downino' }))

storiesOf('Dropdown', module)
  .add('default', () => <Dropdown label="My Dropdwon" items={items} onClick={action('clicked')} />)
  .add('colored violet', () => (
    <Dropdown label="My Dropdwon" items={items} color="violet" onClick={action('clicked')} />
  ))
  .add('colored green', () => <Dropdown label="My Dropdwon" items={items} color="green" onClick={action('clicked')} />)
  .add('large', () => <Dropdown size="large" label="My Dropdwon" items={items} onClick={action('clicked')} />)
  .add('small', () => <Dropdown size="small" label="My Dropdwon" items={items} onClick={action('clicked')} />)
