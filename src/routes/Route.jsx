import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashbboard/Dashboard";
import Login from "../pages/login/Login";
import Home from "../pages/dashbboard/home/Home";
import Chat from "../pages/dashbboard/Chat/Chat";
import Pricing from "../pages/dashbboard/pricing/Pricing";
import SignUp from "../pages/signup/signup";
import Tables from "../pages/table/Tables";
import Tickets from "../pages/dashbboard/Tickets/Tickets";
import Setting from "../pages/setting/Setting";
import Form from "../pages/form/Form";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <SignUp />

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
                path:"/dashboard/tickets",
                element: <Tickets/>

            },
            {
                path: "/dashboard/chat",
                element: <Chat />
            },
            {
                path: "/dashboard/pricing",
                element: <Pricing />
            },
            {
                path: "/dashboard/table",
                element: <Tables />
            },
            {
                path: "/dashboard/settings",
                element: <Setting />
            },
            {
                path: "/dashboard/form",
                element: <Form />
            }

        ]
    }
])