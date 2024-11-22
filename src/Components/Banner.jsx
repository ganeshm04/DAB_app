import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate=useNavigate();
    return (
        <div>
            <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
                {/* ------Left Side------ */}
                <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-20 lg:pl-5'>
                    <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold'>
                        <p>Book Appointment </p>
                        <p className='mt-4'>with 100+ Trusted Doctors Trusted Doctors</p>
                    </div>
                    <button
                    onClick={()=>{navigate('/login');scrollTo(0,0)}}
                    className='bg-white px-8 py-3 rounded-full mt-6  text-gray-600 text-sm sm:text-base hover:scale-105  transition-all duration-300'>
                        Create Account
                    </button>
                </div>
                {/* ------Right Side----- */}
                <div className='hidden md:block lg:w-[370px] md:w-1/2 relative'>
                    <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner