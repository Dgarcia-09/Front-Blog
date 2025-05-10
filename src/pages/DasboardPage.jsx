import React from "react";
import { Navbar } from "../components/Navbar.jsx";
import "../assets/styles/dashboardPage.css"

export const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <header className="header">
                <h1 className="titulo-principal">Blog de Aprendizaje</h1>
                <Navbar />
            </header>

            <main className="contenido">
            </main>
        </div>
    );
};
