import { useState } from 'react';
import { useListarPublicaciones } from '../shared/hooks';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/publicacionCard.css";

export const PublicacionCard = () => {
  const { publicaciones, loading, error } = useListarPublicaciones();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCurso, setSelectedCurso] = useState('');

  if (loading) return <div className='loading'>Cargando...</div>;
  if (error) return <div className='error'>Error: {error}</div>;
  if (!publicaciones || !Array.isArray(publicaciones)) return <div className='error'>No se pudo cargar la lista de publicaciones</div>;


  const cursos = [...new Set(publicaciones.map(pub => pub.curso))];

  const publicacionesFiltradas = publicaciones
    .filter((publicacion) =>
      publicacion.titulo.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCurso ? publicacion.curso === selectedCurso : true)
    );

  return (
    <div className="publicaciones-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <select
        value={selectedCurso}
        onChange={(e) => setSelectedCurso(e.target.value)}
      >
        <option value="">Todos los cursos</option>
        {cursos.map((curso, index) => (
          <option key={index} value={curso}>{curso}</option>
        ))}
      </select>

      <div className="publicaciones-lista">
        {publicacionesFiltradas.map((publicacion) => (
          <div
            key={publicacion._id}
            className="publicacion-card"
            onClick={() => navigate(`/publicaciones/${publicacion._id}`)}
          >
            <h2>{publicacion.titulo}</h2>
            <p>{publicacion.descripcion}</p>
            <p className="publicacion-fecha">
              {publicacion.fecha}
            </p>
            <p>{publicacion.curso}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
