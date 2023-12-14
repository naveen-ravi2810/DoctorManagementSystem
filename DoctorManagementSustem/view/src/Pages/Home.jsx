import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from './../Image/FrontImage.png'
function Home() {
  return (
    <div className='w-[100%] h-screen'>
        <div className='w-[100%] h-[50%] px-10 pt-5'>
            <img src={HomeImage} className='w-[100%] h-full' alt='Home'/>
        </div>
        <div className='flex justify-center text-3xl pt-10'>
            <Link to='/login'>Click Here to login</Link>
        </div>
    </div>
  )
}

export default Home