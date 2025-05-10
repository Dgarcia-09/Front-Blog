import { useState } from 'react';
import { useListarPublicaciones } from '../shared/hooks';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/publicacionCard.css";

export const PublicacionCard = () => {
  const { publicaciones, loading, error } = useListarPublicaciones();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <div className='loading'>Cargando...</div>;
  if (error) return <div className='error'>Error: {error}</div>;
  if (!publicaciones || !Array.isArray(publicaciones)) return <div className='error'>No se pudo cargar la lista de publicaciones</div>;

  return (
    <div className="publicaciones-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="publicaciones-lista">
        {publicaciones
          .filter((publicacion) =>
            publicacion.titulo.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((publicacion) => (
            <div
              key={publicacion._id}
              className="publicacion-card"
              onClick={() => navigate(`/publicaciones/${publicacion._id}`)}
            >
              <h2>{publicacion.titulo}</h2>
              <p>{publicacion.descripcion}</p>
              <p className="publicacion-fecha">
                Publicado el {new Date(publicacion.createdAt).toLocaleDateString()}
              </p>
              <p>{publicacion.curso}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
