import React from 'react'
import MobileNavBarr from './MobileNavBarr'
import AdminHeader from './AdminHeader'
import MenuBar from './MenuBar'

const NavBar = () => {
  return (
    <div className='border-b w-full bg-white shadow-sm'>
        <MobileNavBarr/>
        <AdminHeader/>
    </div>
  )
}

export default NavBar