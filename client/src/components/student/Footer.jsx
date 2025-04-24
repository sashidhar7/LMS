import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
        <div className='flex flex-col md:flex-row items-start  px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
          <div className='flex flex-col md:item-start items-center w-full'>
            <img src={assets.logo_dark} alt="logo" />
            <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum is simply dummy text of the printing and
              typesetting Industry. Lorem Ipsum has been the
              Industrys standard dummy text</p>
          </div>
          <div className='flex flex-col md:items-start items-center w-full'>
            <h2 className='font-semibold text-white mb-5'>Company</h2>
            <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy policy</a></li>
   
            </ul>
          </div>
          <div className='hidden md:flex flex-col items-start w-full'>
            <h2 className='font-semibold text-white mb-5'>Subscribe to our NewsLetter</h2>
            <p className='text-sm text-white/80'>The Latest News, articles, and resources, sent to yopur inbox weekly.</p>
            <div className='flex items-center gap-2 pt-4'>
              <input className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-s' type="email" placeholder='Enter Your Email'/>
              <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subscribe</button>
            </div>
          </div>

        </div>
        <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025  © Sashidhar. All rights Reserved </p>
      </footer>

    </div>
  )
}

export default Footer
