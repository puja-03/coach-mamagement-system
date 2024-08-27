"use client"
import React from 'react'
import MenuBar from './MenuBar'

const SideBar = () => {
  return (
    <div className='h-full border-r inset-0 flex flex-col overflow-y-auto bg-white shadow-sm'>
        <h1 className='text-red-700 text-4xl font-bold text-center mt-5'>Ecoach</h1>

        <MenuBar/>

    </div>
  )
}

export default SideBar