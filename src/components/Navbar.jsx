import React, { useState } from 'react';
import { HiOutlineMenuAlt4, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed top-4 left-4 right-4 z-50 bg-white shadow-lg rounded-3xl px-6 py-4 md:px-10 transition-all duration-300 ${isOpen ? 'pb-6' : 'pb-4'}`}>
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-black font-extrabold text-2xl tracking-wide font-[Poppins] hover:opacity-80"
        >
          ZesterTech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 items-center">
          <Link to="/" className="text-gray-800 px-3 py-1.5 hover:bg-gray-100 rounded-full">Home</Link>
          <Link to="/about" className="text-gray-800 px-3 py-1.5 hover:bg-gray-100 rounded-full">About Us</Link>
          <Link to="/contact" className="text-gray-800 px-3 py-1.5 hover:bg-gray-100 rounded-full">Contact</Link>
          <button className="bg-black text-white px-5 py-1.5 rounded-full flex items-center hover:bg-gray-800 transition">
            Get Started <HiArrowRight className="ml-2" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          <HiOutlineMenuAlt4 />
        </button>
      </div>

      {/* Mobile Menu (Inside Rounded Box) */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-3 md:hidden">
          <Link to="/" className="text-gray-800 py-2 rounded-full text-center hover:bg-gray-100">Home</Link>
          <Link to="/about" className="text-gray-800 py-2 rounded-full text-center hover:bg-gray-100">About Us</Link>
          <Link to="/contact" className="text-gray-800 py-2 rounded-full text-center hover:bg-gray-100">Contact</Link>
          <button className="bg-black text-white py-2 rounded-full">Get Started</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
