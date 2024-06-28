/*
  Componente TextInput: Un componente versátil que puede ser un input de texto simple o un input de texto con un icono.

  Estructura del Componente:
  - TextInput (simple):
    label
    --------------------------
    | placeholder             |
    --------------------------
    mensaje de error

  - TextInputIcon (con icono):
    label
    --------------------------
    | placeholder    | ICONO |
    --------------------------
    mensaje de error

  Props:
  @param {string} type - Tipo de input (ej. password, text, number, etc).
  @param {string} name - Identificador del input (ej. password, username, age, etc).
  @param {string} value - Valor actual del input.
  @param {function} onChange - Función que maneja el cambio de valor del input.
  @param {string} label - Etiqueta descriptiva del input.
  @param {string} error - Mensaje de error a mostrar.
  @param {boolean} stateError - Estado del error (true: muestra el mensaje, false: no muestra el mensaje).
  @param {boolean} isTextInputIcon - Define si el input tendrá un icono (true: input con icono, false: input sin icono).
  @param {boolean} isDoubleIcon - Define si el icono tendrá funcionalidad adicional para cambiar con un clic o una función extra.
  @param {array} icons - Listado de iconos a utilizar si isDoubleIcon es true.
  @param {function} clickIcon - Función a ejecutar al hacer clic en el icono si isDoubleIcon es false.

  @returns {JSX.Element} Un componente de input de texto.
*/

import styles from './text_input.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  error,
  stateError,
  isTextInputIcon,
  isDoubleIcon,
  icons,
  clickIcon
}) => {
  const [currentIndex, setCurrentIndex] = useState(0) // Controla el índice del icono actual.
  const [myIcon, setMyIcon] = useState(icons[0]) // Controla el icono actual.

  // Cambia al siguiente icono en la lista.
  const changeIcon = () => {
    const nextIndex = (currentIndex + 1) % icons.length
    setCurrentIndex(nextIndex)
    setMyIcon(icons[nextIndex])
  }

  return (
    <div className={styles.TextInputContainer}>
      <div className={styles.LabelTextInput}>{label}</div>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={isTextInputIcon ? styles.TextInputIcon : styles.TextInput}
        />
        {isDoubleIcon && (
          <FontAwesomeIcon className={styles.Icon} icon={myIcon} onClick={changeIcon} />
        )}
        {isTextInputIcon && !isDoubleIcon && (
          <FontAwesomeIcon className={styles.Icon} icon={myIcon} onClick={clickIcon} />
        )}
      </div>
      <div className={styles.ErrorTextInput}>{stateError ? error : null}</div>
    </div>
  )
}

// Requerimientos de props
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  stateError: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isTextInputIcon: PropTypes.bool.isRequired,
  isDoubleIcon: PropTypes.bool,
  icons: PropTypes.array,
  clickIcon: PropTypes.func
}

export default TextInput
