import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter } from './BrowserRouter'


const App = () => {
  return (
    <>
    <div >
    <RouterProvider router={BrowserRouter}/>
    </div>
    </>
  )
}

export default App