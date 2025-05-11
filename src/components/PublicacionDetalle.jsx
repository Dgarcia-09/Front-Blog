import { useState } from "react";
import { useParams } from "react-router-dom";
import { useObtenerComentarios } from "../shared/hooks/useObtenerComentarios";
import { crearComentario } from "../services/api";
import { Navbar } from "./Navbar";
import "../assets/styles/publicacionDetalle.css";

export const PublicacionDetalle = () => {
  const { id } = useParams();
  const { comentarios, loading, error } = useObtenerComentarios(id);

  const [nuevoComentario, setNuevoComentario] = useState({
    userName: "",
    comentario: ""
  });
  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) => {
    setNuevoComentario({
      ...nuevoComentario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await crearComentario(id, nuevoComentario);
      if (response?.data?.success) {
        setNuevoComentario({ userName: "", comentario: "" });
        window.location.reload(); 
      } else {
        setMensaje("No se pudo crear el comentario.");
      }
    } catch (err) {
      setMensaje("Ocurrió un error: " + err.message);
    }
  };

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

          <form onSubmit={handleSubmit} className="form-comentario">
            <h3>Agrega un comentario</h3>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={nuevoComentario.userName}
              onChange={handleChange}
              required
            />
            <textarea
              name="comentario"
              placeholder="Escribe tu comentario"
              value={nuevoComentario.comentario}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Publicar comentario</button>
            {mensaje && <p className="mensaje">{mensaje}</p>}
          </form>
        </div>
      </main>
    </div>
  );
};
