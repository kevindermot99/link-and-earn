import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-14 bg-stone-100 flex items-center justify-center gap-4'>
        <Link to={`/`}>Home</Link>
        <Link to={`/login`}>Login</Link>
        <Link to={`/register`}>Register</Link>
    </div>
  )
}

export default Navbar