// src/pages/TemplatePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TemplatePage = () => {
  const templates = [
    { id: 1, name: "Simple Resume", link: "/resume-maker" },
    { id: 2, name: "Professional Resume", link: "/resume-maker" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-blue-7 text-blue-2 font-[Poppins]">
      <Navbar />
      <div className="flex-grow py-10">
        <h1 className="text-center text-4xl font-bold mb-8">Choose a Template</h1>
        <div className="flex justify-center space-x-4">
          {templates.map(template => (
            <a href={template.link} key={template.id} className="bg-blue-5 text-white p-4 rounded shadow-md hover:bg-blue-6">
              {template.name}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TemplatePage;
