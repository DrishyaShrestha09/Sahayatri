import './index.css'
import Navigation from "./components/Navigation"
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {},
  ])
  return (
    <div>
      <Navigation/>
    </div>
  )
}

export default App
