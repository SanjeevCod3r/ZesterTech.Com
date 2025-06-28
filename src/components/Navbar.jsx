import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-white shadow-md fixed w-full z-50'>
      <div className='flex justify-between items-center text-lg px-4 md:px-8 py-3'>
        <span className='font-bold text-xl'>ZesterTech</span>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4 items-center'>
          <Link to='/' className='text-black px-3 py-1.5 hover:bg-gray-100 rounded-md transition-colors'>Home</Link>
          <Link to='/about' className='text-black px-3 py-1.5 hover:bg-gray-100 rounded-md transition-colors'>About Us</Link>
          <Link to='/contact' className='text-black px-3 py-1.5 hover:bg-gray-100 rounded-md transition-colors'>Contact</Link>
          <button className='bg-black text-white px-4 py-1.5 rounded-md flex items-center hover:bg-gray-800 transition-colors'>
            Get Started <HiArrowRight className='ml-1.5' />
          </button>
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
        <div className='md:hidden bg-white p-3 flex flex-col space-y-3'>
          <Link to='/' className='text-black px-3 py-1.5 hover:bg-gray-100 rounded-md transition-colors block'>Home</Link>
          <Link to='/about' className='text-black w-full px-3 py-1.5 hover:bg-gray-100 rounded-md block'>About Us</Link>
          <Link to='/contact' className='text-black w-full px-3 py-1.5 hover:bg-gray-100 rounded-md block'>Contact</Link>
          <button className='bg-black text-white w-full px-4 py-1.5 rounded-md'>Get Started</button>
        </div>
      )}
    </div>
  )
}

export default Navbar;