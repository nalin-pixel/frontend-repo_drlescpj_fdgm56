import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-pink-50/70 border-b border-pink-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-pink-800">
          Pink Atelier
        </a>
        <nav className="flex items-center gap-6 text-pink-700">
          <a href="#work" className="hover:text-pink-900 transition-colors">Work</a>
          <a href="#about" className="hover:text-pink-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
