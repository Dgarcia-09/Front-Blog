import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicacionCard } from './PublicacionCard';
import { usePublicacion } from '../../shared/hooks';

export const Publicacion = () => {
    const navigate = useNavigate();
    const { publicaciones, loading, error } = usePublicacion();

    const navigateToPublicationHandler = (id) => {
        navigate(`/publicaciones/${id}`);
    };

    if (loading) return <p>Cargando publicaciones...</p>;
    if (error) return <p>Error al cargar publicaciones: {error}</p>;
    if (!Array.isArray(publicaciones)) return <p>No hay publicaciones disponibles.</p>;

    return (
        <div className='publicacion-contenedor'>
            {publicaciones.map((publi) => (
                <PublicacionCard
                    key={publi.id}
                    titulo={publi.titulo}
                    descripcion={publi.descripcion}
                    curso={publi.curso}
                    imagen={publi.imagen}
                    fecha={publi.fecha}
                    id={publi.id}
                    navigateToPublicationHandler={navigateToPublicationHandler}
                />
            ))}
        </div>
    );
};
