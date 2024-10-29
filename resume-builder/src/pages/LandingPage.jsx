// src/pages/LandingPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-9 text-blue-2 font-[Poppins]">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-1 mb-4">Create Your Professional Resume</h1>
          <p className="text-lg mb-8 text-blue-3">Get started with easy and customizable templates.</p>
          <a href="/home" className="bg-blue-3 text-white px-6 py-3 rounded hover:bg-blue-5">
            Go to Home Page
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
