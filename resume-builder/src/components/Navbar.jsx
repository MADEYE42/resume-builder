// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-3 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Resume Builder</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-blue-6">Home</a>
        <a href="/templates" className="hover:text-blue-6">Templates</a>
      </div>
    </nav>
  );
};

export default Navbar;
