import React from 'react';

const Navbar = () => {
  const navItems = [
    'Home', 'Experience', 'Projects', 'Certifications', 'Skills', 'Education', 'Contact'
  ];

  return (
    <div className="bg-black w-full">
      <div className="relative overflow-hidden py-4">
        {/* Simulated starry background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 relative z-10">
            {navItems.map((item) => (
              <div
                key={item}
                className="px-3 py-2 text-sm text-white bg-gray-900 bg-opacity-80 rounded-md hover:bg-opacity-100 transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;