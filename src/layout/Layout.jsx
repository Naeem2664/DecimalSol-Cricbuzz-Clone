import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
