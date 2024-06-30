import Button from './Button'
import { fn } from '@storybook/test';

export default {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const ButtonDefault = {
    
}

export const ButtonWithText = {
    args: {
        content: 'Click',
        onClick: fn()
    }
}

export const ButtonTextLarge = {
    args: {
        content: 'Click in button for text large',
        onClick: fn()
    }
}

export const ButtonWithoutText = {
    args: {
        content: '',
        onClick: fn()
    }
}