import React from 'react'
import MaleDoc1 from './../Image/MaleDoctor1.jpg'
import MaleDoc2 from './../Image/maledoctor2.jpg'
import FeMaleDoc1 from './../Image/femaledoctor1.jpg'
import FeMaleDoc2 from './../Image/femaledoctor2.jpg'
import { Link } from 'react-router-dom'
export const Doctorrs = () => {
  return (
    <div>
        <div>
            <p className='uppercase text-center text-4xl pt-10 text-green-600 pb-10'>List of doctors</p>
        </div>
        <div className='flex justify-center '>
            <div className='text-center grid grid-cols-2'>
                {/* Doc 1 */}
                <div id="doc1" className='flex items-center px-10 gap-3 pb-10'>
                    <img className=' w-96 h-96' src={MaleDoc1} alt="" />
                    <div>
                        <div className='grid-cols-2 grid p-1'>
                            <p className='px-2 font-bold'>Name: </p><p className='px-2'>John Doe</p>
                            <p className='px-2 font-bold'>Specialist: </p><p className='px-2'> Heart</p>
                        </div>
                        <p><Link className='bg-green-600 text-white text-center p-2 hover:bg-green-900' to='/book/JohnDoe'>Book an Appointment</Link></p>
                    </div>
                </div>
                {/* Doc 2 */}
                <div id="doc2" className='flex items-center px-10 gap-3 pb-10'>
                    <img className=' w-96 h-96' src={FeMaleDoc1} alt="" />
                    <div>
                        <div className='grid-cols-2 grid p-1'>
                            <p className='px-2 font-bold'>Name: </p><p className='px-2'>Marry</p>
                            <p className='px-2 font-bold'>Specialist: </p><p className='px-2'>Skin</p>
                        </div>
                        <p><Link className='bg-green-600 text-white text-center p-2 hover:bg-green-900' to='/book/marry'>Book an Appointment</Link></p>
                    </div>
                </div>
                {/* doc3 */}
                <div id="doc2" className='flex items-center px-10 gap-3 pb-10'>
                    <img className=' w-96 h-96' src={MaleDoc2} alt="" />
                    <div>
                        <div className='grid-cols-2 grid p-1'>
                            <p className='px-2 font-bold'>Name: </p><p className='px-2'>Arun</p>
                            <p className='px-2 font-bold'>Specialist: </p><p className='px-2'>Child</p>
                        </div>
                        <p><Link className='bg-green-600 text-white text-center p-2 hover:bg-green-900' to='/book/arun'>Book an Appointment</Link></p>
                    </div>
                </div>
                {/* Doc 4 */}
                <div id="doc2" className='flex items-center px-10 gap-3 pb-10'>
                    <img className=' w-96 h-96' src={FeMaleDoc2} alt="" />
                    <div>
                        <div className='grid-cols-2 grid p-1'>
                            <p className='px-2 font-bold'>Name: </p><p className='px-2'>Priya</p>
                            <p className='px-2 font-bold'>Specialist: </p><p className='px-2'>Ear</p>
                        </div>
                        <p><Link className='bg-green-600 text-white text-center p-2 hover:bg-green-900' to='/book/priya'>Book an Appointment</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
