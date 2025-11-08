import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-pink-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2kUhnZ-bxxbk5a4y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-50/40 via-pink-50/20 to-pink-50" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100/80 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm backdrop-blur">
          ✨ Artistic Portfolio
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-pink-900 sm:text-6xl">
          Touch the Art
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pink-800/80 sm:text-lg">
          A soft, playful space to explore visuals and textures. Tap, drag, and feel the motion in a pastel pink world.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="rounded-full bg-pink-600 px-6 py-3 text-white shadow-md transition-transform hover:scale-[1.02] hover:bg-pink-700 active:scale-95">
            View Work
          </a>
          <a href="#contact" className="rounded-full bg-white/80 px-6 py-3 text-pink-700 shadow-md ring-1 ring-pink-200 backdrop-blur transition-transform hover:scale-[1.02] active:scale-95">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
