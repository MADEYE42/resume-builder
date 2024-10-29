// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import TemplatePage from './pages/TemplatePage';
import ResumeMakerPage from './pages/ResumeMakerPage';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/resume-maker" element={<ResumeMakerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
