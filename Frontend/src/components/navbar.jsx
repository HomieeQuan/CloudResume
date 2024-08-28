import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Certifications', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Education', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center mb-2 w-full justify-center sm:mb-0 sm:w-auto sm:justify-start">
          <svg className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 10C4.5 7.51472 6.51472 5.5 9 5.5C11.4853 5.5 13.5 7.51472 13.5 10C13.5 10.0097 13.4999 10.0193 13.4998 10.029C13.8349 9.73144 14.2554 9.5 14.7273 9.5C15.9766 9.5 17 10.5234 17 11.7727C17 11.8171 16.9981 11.8612 16.9944 11.9049C17.3439 11.6537 17.7633 11.5 18.2222 11.5C19.7545 11.5 21 12.7455 21 14.2778C21 15.8101 19.7545 17.0556 18.2222 17.0556H7.61111C5.61492 17.0556 4 15.4407 4 13.4444C4 11.8578 5.04153 10.5121 6.47405 10.0957C5.32386 10.7441 4.5 11.9726 4.5 13.4444V10Z"/>
          </svg>
        </div>
        
        <div className="flex flex-wrap justify-center sm:justify-end space-x-2 space-y-2 sm:space-y-0 w-full sm:w-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm text-white bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;