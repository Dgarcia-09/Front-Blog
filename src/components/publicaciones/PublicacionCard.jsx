import React from 'react'
import PropTypes from 'prop-types'

export const PublicacionCard = ({
  titulo,
  descripcion,
  curso,
  imagen,
  fecha,
  id,
  navigateToPublicationHandler
}) => {
  const handleNavigate = () => {
    navigateToPublicationHandler(id)
  }

  return (
    <div onClick={handleNavigate} className="card">
      <div className="card-header">
        <h2>{titulo}</h2>
      </div>
      <div className="card-body">
        <p>{descripcion}</p>
        <p>{curso}</p>
        <p>{fecha}</p>
      </div>
      <div className="card-footer">
        <img src={imagen} alt={titulo} />
      </div>
    </div>
  )
}

PublicacionCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  curso: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  navigateToPublicationHandler: PropTypes.func.isRequired
}
