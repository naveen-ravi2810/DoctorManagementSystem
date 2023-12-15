import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className='bg-green-400 flex justify-between items-center px-10 py-2'>
            <div className='text-3xl' id="logo"><Link to='/'><span className='text-5xl font-bold text-white'>+ </span> Med Home</Link></div>
            <div id='options'>
                <ul className='uppercase text-xl flex gap-3 items-center'>
                    <li><Link to='/doctors'>Doctors</Link></li>
                    <li><Link to='/appointment'>Appointments</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}