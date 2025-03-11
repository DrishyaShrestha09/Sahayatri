import './index.css'
import Navigation from "./components/Navigation"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Campaign from './pages/Campaign';
import About_us from './pages/About_us';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navigation/><Home/></>
    },
    {
      path: "/campaign",
      element: <><Navigation/><Campaign/></>
    },
    {
      path: "/about_us",
      element: <><Navigation/><About_us/></>
    },
    {
      path: "/contact",
      element: <><Navigation/><Contact/></>
    },
    {
      path: "/register",
      element: <><Navigation/><Register/></>
    },
    {
      path: "/login",
      element: <><Navigation/><Login/></>
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
