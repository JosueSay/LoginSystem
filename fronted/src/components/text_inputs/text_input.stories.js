import TextInput from './text_input'

export default {
  component: TextInput
}

export const InputText = {
  args: {
    type: 'text',
    placeholder: 'Ingresa un texto'
  }
}

export const InputNumber = {
  args: {
    type: 'number',
    placeholder: 'Ingresa tu edad'
  }
}
