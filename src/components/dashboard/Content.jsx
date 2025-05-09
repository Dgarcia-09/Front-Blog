import React from 'react';
import { Publicacion } from '../publicaciones/Publicacion.jsx';
import PropTypes from 'prop-types';


export const Content = ({ publicaciones }) => {
    return (
        <div className='content'>
            <Publicacion publicaciones={publicaciones} />
        </div>
    )
}

Content.propTypes = {
    publicaciones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            curso: PropTypes.string.isRequired,
            imagen: PropTypes.string.isRequired,
            fecha: PropTypes.string.isRequired
        })
    ).isRequired
}

export default Content;