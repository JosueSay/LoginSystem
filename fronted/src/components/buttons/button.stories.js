import Button from './button'
import { fn } from '@storybook/test'

export default {
  component: Button
}

export const ButtonDefault = {
  args: {
    content: 'Click Me',
    onclick: fn()
  }
}
