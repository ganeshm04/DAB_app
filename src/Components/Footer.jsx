import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ----left section------ */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quam ducimus alias nostrum saepe omnis nemo delectus ipsam, harum cum!</p>
        </div>
        {/* ----Center section------ */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ----Right section------ */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>freelancer@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ---------copyright text */}
      <div>
        <p className='py-5 text-sm text-center'>Copyright 2024@ Appointment - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer