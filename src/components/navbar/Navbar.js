import React from 'react';
import logo from '../../assets/logo.svg'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] z-10 bg-white drop-shadow-lg relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]"/>
            </div>
            <div className='flex items-center '>
                <ul className="hidden md:flex">
                    <li className='px-5 py-3'>Home</li>
                    <li className='px-5 py-3'>About</li>
                    <li className='px-5 py-3'>Support</li>
                    <li className='px-5 py-3'>Platform</li>
                    <li className='px-5 py-3'>Pricing</li>
                </ul>
            </div>
            <div className='hidden md:flex sm:mr-10 md:mr-10'>
                <button className='border-none bg-transparent text-black mr-4'>Login</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar