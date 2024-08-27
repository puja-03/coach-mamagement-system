"use client"
import Link from 'next/link'
import React from 'react'
import {signOut, useSession} from "next-auth/react"
import Image from 'next/image'
const HomeHeader = () => {
   const {data:session}= useSession()

    const handleLogout = async()=>{
        await signOut()
    }
  return (

    <header className="bg-gray-900 py-4">
    <div className="container mx-auto flex justify-between items-center">

        <div className="text-white text-2xl font-bold">
            <Link href="/"><h1 className='text-red-700'>E-Coach</h1></Link>
        </div>

        
        <nav className="text-white">
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                {  !session &&(<>
                    <Link href="/login" className="hover:underline">Login</Link>
                    <Link href="/register" className="hover:underline">Register for Admission</Link>
                </>)
                }
                {
                    session &&(<span className='flex gap-2 items-center'>
                    <Image src={session.user.image} className='rounded-full' alt={session.user.name} width={30} height={30}/>
                    <a href="#" className="hover:underline ">{session.user.name}</a>
                       <button onClick={handleLogout} className="hover:text-gray-900  rounded-xl px-2 py-1 bg-red-600 hover:underline">Logout</button>
                    </span>)
                }
            </ul>
        </nav>
    </div>
</header>


  )
}

export default HomeHeader


