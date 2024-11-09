import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='text-3xl'>
        <Outlet/>
    </div>
    </>
  )
}

export default MainLayout