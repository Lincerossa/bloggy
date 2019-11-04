import React from 'react'
import axios from 'axios'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import SelectSuggestion from './index'

const getSuggestions = (value) => axios.get(
  `https://api.dev.godoo.ch/v1.0/translation/translations/en_GB/v1?value=*${value}*`,
  {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token':
          'eyJhbGciOiJIUzUxMiJ9.eyJjcmVhdGVkIjoxNTU0MTE4MDA4Mjc4LCJsYW5ndWFnZSI6ImVuX0dCIiwidmFsaWRGcm9tIjpudWxsLCJleHAiOjE1NTQ3MjI4MDgsInVzZXJJZCI6IjEwMF81YjQ3NWFkOTc3ODMwYTAwMDY2Yjk0ZjIiLCJkZXZpY2UiOiJ3ZWJ1aSIsInVzZXJuYW1lIjoiUklKQTAxIiwidmFsaWRUbyI6bnVsbH0.MXm-e58xU0BIFXg9N3RObxWphrMt9uOeZgdTIxb5zF9aDdYkzOz0EJO2eqvkLABFWX1XpTzOwmUHRLz_1kXSbg',
      'Access-Control-Allow-Headers': 'x-access-token',
      'Client-Type': 'webui',
    },
    data: null,
  },
)

storiesOf('Input:SelectSuggestion', module)
  .add('default', () => (
    <SelectSuggestion
      getSuggestions={(value) => getSuggestions(value).then((data) => data.data)}
      setQuery={action('set query')}
    />
  ))
  .add('disabled', () => (
    <SelectSuggestion
      getSuggestions={(value) => getSuggestions(value).then((data) => data.data)}
      setQuery={action('set query')}
      disabled
    />
  ))
  .add('with value selected', () => (
    <SelectSuggestion
      getSuggestions={(value) => getSuggestions(value).then((data) => data.data)}
      setQuery={action('set query')}
      value={{
        value: 'marciofgfhghgflengo',
      }}
    />
  ))
  .add('with value selected existing', () => (
    <SelectSuggestion
      getSuggestions={(value) => getSuggestions(value).then((data) => data.data)}
      setQuery={action('set query')}
      value={{
        value: 'arigato',
      }}
    />
  ))
