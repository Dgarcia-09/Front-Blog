import { element } from "prop-types";
import { DashboardPage } from "./pages/DasboardPage.jsx";
import { PublicacionPage } from "./pages/PublicacionPage.jsx";
import { PublicacionDetalle } from "./components/PublicacionDetalle.jsx";



export const routes = [
    {path: '/', element: <DashboardPage />},
    {path: '/publicaciones', element: <PublicacionPage />},
    {path: '/publicaciones/:id', element: <PublicacionDetalle />},
]