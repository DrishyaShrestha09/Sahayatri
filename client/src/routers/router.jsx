import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Home from '../pages/home/Home';
import Login from "../components/Login";

import Register from './../components/Register';
import Contact from './../pages/Contact';
import About_us from './../pages/About_us';
import DonatePage from "../pages/campaigns/DonatePage";
import SingleCampaign from "../pages/campaigns/SingleCampaign";
import PrivateRoute from "./PrivateRoute";

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
                element: <About_us/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/donate/:id',
                element: <PrivateRoute><DonatePage /></PrivateRoute>,
            },
            {
                path: '/campaigns/:id',
                element: <SingleCampaign />
            },

        ]
    },
]);

export default router;