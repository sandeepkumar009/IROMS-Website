import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Developers from './pages/Developers'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <><Navbar /><Home/><Footer /></>
      },
      {
        path: "/developers",
        element: <><Navbar /><Developers/><Footer /></>
      }
    ]
  );

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
