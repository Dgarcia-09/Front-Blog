import React from "react";
import { Navbar } from "../components/Navbar.jsx";
import { PublicacionCard } from "../components/PublicacionCard.jsx";



export const PublicacionPage = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1 className="titulo-principal">Blog de Aprendizaje</h1>
        <Navbar />
      </header>

      <main className="contenido">
        <PublicacionCard />
      </main>
    </div>
  );
};
