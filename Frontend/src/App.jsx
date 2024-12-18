import { useState, useEffect } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'
import HomePage from './components/home'
import Navbar from './components/navbar'
import Experience from './components/experience'
import Projects from './components/projects'
import Certifications from './components/certs'



function App() {
 
 
  



  
  return (
    <Router>
      <div className="w-full min-h-screen bg-black relative overflow-hidden">
        {/* Starry background */}
        <div className="absolute inset-0 z-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10">

          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/certs' element={<Certifications />} />
            
          </Routes>
          <div className="container mx-auto px-4 py-8">
              

          </div>
        </div>

        <style jsx global>{`
      @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      .animate-twinkle {
        animation: twinkle 3s infinite;
      }
    `} </style>
      </div>
      

    </Router>
  );
};



export default App
