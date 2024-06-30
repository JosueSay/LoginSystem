/*
  Hook useForm: Maneja los valores de los campos de texto en un formulario.

  @param {object} initialState - Estado inicial de los datos del formulario.

  @returns {object} Objeto con el estado actual del formulario (`formData`) y una función para manejar cambios en los campos (`handleChange`).
*/

import { useState } from 'react'

const useForm = (initialState) => {
  // Estado local para los datos del formulario, inicializado con el estado inicial proporcionado.
  const [formData, setFormData] = useState(initialState)

  // Función para manejar cambios en los campos de entrada del formulario.
  // Actualiza el estado del formulario con el nuevo valor del campo modificado.
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Retorna el estado actual del formulario y la función para manejar cambios.
  return { formData, handleChange }
}

export default useForm
