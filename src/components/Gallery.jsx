import React from 'react';

const pieces = [
  {
    title: "Starry Night (Pink Study)",
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Blush Horizon",
    img: "https://images.unsplash.com/photo-1526318473911-30d5cdb00be9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Petal Fields",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Rose Quartz Night",
    img: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1600&auto=format&fit=crop",
  },
];

const Gallery = () => {
  return (
    <section id="work" className="bg-pink-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-pink-900 sm:text-4xl">Selected Works</h2>
            <p className="mt-2 text-pink-800/80">A soft curation in rosy hues.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-pink-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <figcaption className="p-4 text-pink-800">
                <span className="font-medium">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
