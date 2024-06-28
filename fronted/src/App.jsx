import './App.css'
import Button from '@components/buttons/button'
import useForm from '@hooks/userForms'
import TextInput from '@components/text_inputs/text_input'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const App = () => {
  const clickButton = () => {
    console.log('Click!')
  }

  const { formData, handleChange } = useForm({ username: '' })

  return (
    <div className="App">
      <div className='BotonIngreso'>
        <Button content="Ingresar" onClick={clickButton}/>
        <TextInput
          label='Username'
          error='Username incorrecto'
          stateError= {false}
          type='text'
          name='username'
          placeholder='Ingrese su username'
          value={formData.username}
          onChange={handleChange}
          isTextInputIcon = {false}
          isDoubleIcon = {true}
          icons = {[faEye, faEyeSlash]}
          clickIcon = {null}
        />
      </div>
    </div>
  )
}

export default App
