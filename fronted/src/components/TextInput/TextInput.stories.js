import TextInput from './TextInput'
import { fn } from '@storybook/test'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Componentes/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const TextInputDefault = {
    
}

export const TextInputTextCorrect = {
    args: {
        type: 'text',
        name: 'texto',
        value: 'Mi texto',
        label: 'Texto',
        placeholder: 'Ingresa un texto',
        error: 'Texto incorrecto',
        stateError: false,
        onChange: fn(),
        isTextInputIcon: false,
        isDoubleIcon: false,
        icons: [],
        clickIcon: fn() 
    }
}

export const TextInputTextIncorrect = {
    args: {
        type: 'text',
        name: 'texto',
        value: '',
        label: 'Contraseña',
        placeholder: 'Ingresa un texto',
        error: 'Texto incorrecto',
        stateError: true,
        onChange: fn(),
        isTextInputIcon: false,
        isDoubleIcon: false,
        icons: [],
        clickIcon: fn() 
    }
}

export const TextInputPassword = {
    args: {
        type: 'password',
        name: 'password',
        value: '12345',
        label: 'Contraseña',
        placeholder: 'Ingresa su contraseña',
        error: 'Contraseña incorrecta',
        stateError: false,
        onChange: fn(),
        isTextInputIcon: false,
        isDoubleIcon: false,
        icons: [],
        clickIcon: fn() 
    }
}

export const TextInputPasswordIncorrect = {
    args: {
        type: 'password',
        name: 'password',
        value: '',
        label: 'Contraseña',
        placeholder: 'Ingresa su contraseña',
        error: 'Contraseña incorrecta',
        stateError: true,
        onChange: fn(),
        isTextInputIcon: false,
        isDoubleIcon: false,
        icons: [],
        clickIcon: fn() 
    }
}

export const TextInputIconPasswordCorrect = {
    args: {
        type: 'password',
        name: 'password',
        value: '12345',
        label: 'Contraseña',
        placeholder: 'Ingresa su contraseña',
        error: 'Contraseña incorrecta',
        stateError: false,
        onChange: fn(),
        isTextInputIcon: true,
        isDoubleIcon: true,
        icons: [faEye, faEyeSlash],
        clickIcon: fn() 
    }
}

export const TextInputIconPasswordIncorrect = {
    args: {
        type: 'password',
        name: 'password',
        value: '',
        label: 'Contraseña',
        placeholder: 'Ingresa su contraseña',
        error: 'Contraseña incorrecta',
        stateError: true,
        onChange: fn(),
        isTextInputIcon: true,
        isDoubleIcon: true,
        icons: [faEye, faEyeSlash],
        clickIcon: fn()
    }
}