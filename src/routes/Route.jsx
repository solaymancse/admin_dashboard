import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashbboard/Dashboard";
import Login from "../pages/login/Login";
import Home from "../pages/dashbboard/home/Home";
import Chat from "../pages/dashbboard/Chat/Chat";
import Pricing from "../pages/dashbboard/pricing/Pricing";

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
            },
            {
                path: "/dashboard/chat",
                element: <Chat />
            },
            {
                path: "/dashboard/pricing",
                element: <Pricing />
            }

        ]
    }
])