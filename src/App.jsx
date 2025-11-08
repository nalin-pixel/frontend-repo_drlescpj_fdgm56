import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-pink-900">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <footer className="bg-pink-100/80 border-t border-pink-200 py-8 text-center text-pink-700">
        <p>© {new Date().getFullYear()} Pink Atelier — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
