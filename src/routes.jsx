import { element } from "prop-types";
import { DashboardPage } from "./pages/DasboardPage.jsx";
import { PublicacionPage } from "./pages/PublicacionPage.jsx";


export const routes = [
    {path: '/', element: <DashboardPage />},
    {path: '/publicaciones', element: <PublicacionPage />},
]