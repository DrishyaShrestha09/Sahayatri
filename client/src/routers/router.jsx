import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/campaign',
                element: <div>Campaign Page</div>,
            },
            {
                path: '/about_us',
                element: <div>About us Page</div>,
            },
            {
                path: '/contact',
                element: <div>Contact Page</div>,
            },
            {
                path: '/register',
                element: <div>Register Page</div>,
            },

        ]
    },
]);

export default router;