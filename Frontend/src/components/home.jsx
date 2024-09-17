import React from 'react';
import { MapPin, Download, Linkedin, Github } from 'lucide-react';
import Quanimage from "../images/Quan.png";


const HomePage = () => (
  <div className="relative min-h-screen w-full bg-black text-white p-4 overflow-hidden">
    {/* Starry background */}
    <div className="absolute inset-0">
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

    {/* Profile Content */}
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 bg-cyan-500 bg-opacity-20 rounded-full flex items-center justify-center p-2">
            <div className="w-full h-full bg-black bg-opacity-50 rounded-full flex items-center justify-center overflow-hidden">
              <img src={Quanimage} alt="Taquan Middleton" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-3 text-cyan-300 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 text-cyan-300 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all duration-300">
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-grow text-center md:text-left">
          <div>
            <h1 className="text-4xl font-bold text-white">Taquan Middleton</h1>
            <h2 className="text-xl text-cyan-300 mt-2">Software Engineer</h2>
          </div>
          <div className="flex items-center text-cyan-200 justify-center md:justify-start">
            <MapPin size={20} className="mr-2" />
            <span>New Jersey, USA</span>
          </div>
          <a href="#" className="inline-block">
            <button className="flex items-center text-black bg-cyan-400 px-6 py-3 rounded-full font-bold hover:bg-cyan-300 transition-all duration-300 mx-auto md:mx-0">
              <Download size={20} className="mr-2" />
              <span>Download CV</span>
            </button>
          </a>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">About Me</h3>
        <p className="text-cyan-100 leading-relaxed">
        Growing up, I was exposed to various challenges, and there weren't many future career prospects unrelated to playing professional sports or becoming involved in street life. My first exposure to tech was in my younger years. I'd wake up early to attend a computer class that taught basic software and hardware fundamentals. Technology became my escape and source of hope for a better future. As a software engineer, my diverse set of skills and viewpoints enable me to bring fresh and valuable perspectives to the table. I'm highly motivated to use my skills to create equitable solutions. I approach projects creatively while thinking outside the box and am confident that I can make a valuable contribution to any team.
        </p>
      </div>
    </div>

    <style jsx>{`
      @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      .animate-twinkle {
        animation: twinkle 3s infinite;
      }
    `}</style>
  </div>
);

export default HomePage;