import React from "react";
import { Navbar } from "../../components/navBar/Navbar.jsx";
import "./dashboardPage.css";

export const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <header className="header">
                <h1 className="titulo-principal">Blog de Aprendizaje</h1>
                <Navbar />
            </header>

            <main className="contenido">
                <div className="contenido-izquierdo">
                    {}
                </div>
            </main>
        </div>
    );
};
