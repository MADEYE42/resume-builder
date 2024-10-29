// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-8 text-blue-1 font-[Poppins]">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Resume Builder</h1>
          <p className="text-lg mb-8">Choose a template and start building your resume with ease.</p>
          <a href="/templates" className="bg-blue-4 text-white px-6 py-3 rounded hover:bg-blue-6">
            Go to Template Page
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
