import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import RootLayout from "./rootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <RootLayout/>,
        children: [
            {index: true, element: <Navigate to="dashboard" replace/>}, 
            {path : "dashboard", element: <DashboardPage/>},
            {path :"settings", element : <SettingsPage/>}
        ] 
    }
])