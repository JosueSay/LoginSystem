/*
  Componente Button: Un componente básico para botones.

  Props:
  @param {string} content - Contenido del botón.
  @param {function} onClick - Función que se ejecuta al hacer clic en el botón.

  @returns {JSX.Element} Un botón interactivo.
*/

import styles from './button.module.css'
import PropTypes from 'prop-types'

const Button = ({ content, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {content}
    </button>
  )
}

// Requerimientos de props
Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
