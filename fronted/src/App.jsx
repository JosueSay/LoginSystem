import './App.css'
import Button from '@components/Button/Button'
import TextInput from '@components/TextInput/TextInput'
import Login from '@components/Login/Login'
import useForm from '@hooks/userForms'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { AppRouter } from '@components/Router/Router'

const App = () => {
  const clickButton = () => {
    console.log('Click!')
  }

  const { formData, handleChange } = useForm({ username: '' })

  return (
    <div className="App">
      <AppRouter/>
    </div>
  )
}

export default App
