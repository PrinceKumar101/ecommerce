import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
    <div className=' bg-primary_color-light_background text-primary_color-dark_background' >
    <div>
        <Navbar/>
    </div>
    <div className='text-3xl'>
        <Outlet/>
    </div>
    </div>
    </>
  )
}

export default MainLayout