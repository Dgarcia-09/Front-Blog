import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ComentarioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ userName: '', comentario: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ userName: '', comentario: '' }) 
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="userName"
        placeholder="Tu nombre"
        value={formData.userName}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-2 rounded"
      />
      <textarea
        name="comentario"
        placeholder="Escribe tu comentario"
        value={formData.comentario}
        onChange={handleChange}
        required
        className="w-full border p-2 mb-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Enviar
      </button>
    </form>
  )
}

ComentarioForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}