import React from 'react'
import { Outlet } from 'react-router'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import "../styles/Layout.css"

function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer />  
        </>
    )
}

export default Layout