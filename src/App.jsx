import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'


function App() {


  const Router = createBrowserRouter([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/contact",
      element: <Contact />
    },
     {
      path: "/navbar",
      element: <Navbar/>
    }

  ])

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
