import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashbboard/Dashboard";
import Login from "../pages/login/Login";
import Home from "../pages/dashbboard/home/Home";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <Home />
            }

        ]
    }
])