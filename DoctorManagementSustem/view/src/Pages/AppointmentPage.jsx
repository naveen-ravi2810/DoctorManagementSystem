import React from 'react'
import { useParams } from 'react-router-dom'

export const AppointmentPage = () => {
    const {name} = useParams()
  return (
    <div>
        <div>
            <p className='text-2xl text-center pt-10 underline'>Appointment with <span className='text-green-700 capitalize'>{name}</span></p>
        </div>
        <form action="">

        </form>
    </div>
  )
}
