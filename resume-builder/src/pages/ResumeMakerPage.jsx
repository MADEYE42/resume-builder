// src/pages/ResumeMakerPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResumeMakerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    skills: '',
    responsibility: '',
    achievements: '',
    experience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Placeholder for submitting data to Gemini API
    console.log("Submitted", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-9 text-blue-1 font-[Poppins]">
      <Navbar />
      <div className="flex-grow p-10">
        <h1 className="text-4xl font-bold text-center mb-8">Build Your Resume</h1>
        <form className="max-w-lg mx-auto space-y-4">
          {Object.keys(formData).map(field => (
            <div key={field}>
              <label className="block text-lg font-semibold mb-1 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-blue-7 text-blue-9"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-3 text-white px-6 py-3 rounded mt-4 hover:bg-blue-5 "
          >
            Submit & Generate Resume
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeMakerPage;
