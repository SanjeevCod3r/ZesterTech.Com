import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-white shadow-md fixed w-full z-50'>
      <div className='flex justify-between items-center text-lg px-4 md:px-8 py-3'>
        <span className='font-bold text-xl'>ZesterTech</span>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center'>
          <button className='text-black px-3 py-1.5 hover:bg-gray-100 rounded-md transition-colors'>About Us</button>
          <div className='w-16'></div>
          <button className='text-black px-3 py-1.5 hover:bg-gray-100 rounded-md transition-colors'>Contact</button>
          <div className='w-16'></div>
          <a href='https://wa.me/message/3GE5JHLTIOBRI1' target='_blank' className='bg-black text-white px-4 py-1.5 rounded-md flex items-center hover:bg-gray-800 transition-colors'>
            Get Started <HiArrowRight className='ml-1.5' />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='md:hidden text-lg'
        >
          <HiOutlineMenuAlt4 />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white p-3 space-y-3'>
          <button className='text-black w-full px-3 py-1.5 hover:bg-gray-100 rounded-md'>About Us</button>
          <button className='text-black w-full px-3 py-1.5 hover:bg-gray-100 rounded-md'>Contact</button>
          <a href='https://wa.me/message/3GE5JHLTIOBRI1' target='_blank' className='bg-black text-white w-full px-3 py-1.5 rounded-md'>Get Started</a>
        </div>
      )}
    </div>
  )
}

export default Navbar;