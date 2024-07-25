import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavTop from './NavTop/NavTop';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <NavTop/>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/home" className="block text-white hover:text-gray-300 p-2">Home</Link>
          <Link to="/about" className="block text-white hover:text-gray-300 p-2">About</Link>
          <Link to="/services" className="block text-white hover:text-gray-300 p-2">Services</Link>
          <Link to="/gallery" className="block text-white hover:text-gray-300 p-2">Gallery</Link>
          <Link to="/contact" className="block text-white hover:text-gray-300 p-2">Contact Us</Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Nav;
