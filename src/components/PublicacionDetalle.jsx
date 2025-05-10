import { useParams } from 'react-router-dom';
import { useObtenerComentarios } from '../shared/hooks/useObtenerComentarios'; 
import { Navbar } from './Navbar';
import "../assets/styles/publicacionDetalle.css";

export const PublicacionDetalle = () => {
  const { id } = useParams();
  const { comentarios, loading, error } = useObtenerComentarios(id);

  if (loading) return <div className="loading">Cargando comentarios...</div>;
  if (error) return <div className="error">Error: {error}</div>;

   return (
    <div className="dashboard-container">
      <header className="header">
        <h1 className="titulo-principal">Blog de Aprendizaje</h1>
        <Navbar />
      </header>

      <main className="contenido">
        <div className="detalle-container">
          <h2>Comentarios</h2>

          {loading && <div className="loading">Cargando comentarios...</div>}
          {error && <div className="error">Error: {error}</div>}

          {!loading && !error && (
            <>
              {comentarios.length === 0 ? (
                <p>No hay comentarios para esta publicación.</p>
              ) : (
                <ul className="comentarios-lista">
                  {comentarios.map((comentario) => (
                    <li key={comentario._id} className="comentario">
                      <strong>{comentario.userName}</strong>
                      <p>{comentario.comentario}</p>
                      <span className="comentario-fecha">
                        {comentario.fecha}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};


