import React from 'react'
import { Link } from 'react-router-dom'

export const OnAppointments = () => {
  return (
    <div className='flex justify-center'>
        <div>
            <div>
                <p className='text-2xl'>OnAppointments</p>
            </div>
            <div className='pt-10'>
                <p>Click Doctor page <Link className='text-blue-600'>Click here </Link> .</p>
                <p>To book appointments</p>
                <p className='pt-10 text-center'>or</p>
                <p className='pt-10'>Login to see Your Appointments</p>
                <p><Link to='/login' className='text-blue-600'>Click here</Link></p>
            </div>
        </div>
    </div>
  )
}
