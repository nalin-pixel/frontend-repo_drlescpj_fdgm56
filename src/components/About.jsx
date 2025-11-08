import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-pink-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-pink-900 sm:text-4xl">About the Artist</h2>
        <p className="mt-4 text-lg leading-relaxed text-pink-800/90">
          Exploring softness, tactility, and movement through color. This portfolio blends digital play with painterly
          textures — inspired by classic masterpieces and reimagined in pastel pinks.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pink-100">
            <h3 className="font-semibold text-pink-900">Mediums</h3>
            <p className="mt-2 text-pink-800/80">Digital art, interactive 3D, acrylic on canvas</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pink-100">
            <h3 className="font-semibold text-pink-900">Themes</h3>
            <p className="mt-2 text-pink-800/80">Night skies, softness, motion, touch</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pink-100">
            <h3 className="font-semibold text-pink-900">Inspiration</h3>
            <p className="mt-2 text-pink-800/80">Impressionism, modern digital sculpture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
