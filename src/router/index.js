import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Users from "../pages/Users";

export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Users />
            }
        ]
    }
])