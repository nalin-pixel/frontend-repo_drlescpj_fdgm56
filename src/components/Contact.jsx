import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-pink-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-pink-100">
          <h2 className="text-3xl font-bold text-pink-900 sm:text-4xl">Let's Connect</h2>
          <p className="mt-2 text-pink-800/80">Commissions and collaborations welcome.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-pink-900">Name</label>
              <input type="text" className="mt-1 w-full rounded-lg border border-pink-200 bg-pink-50 px-4 py-2 text-pink-900 placeholder-pink-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-pink-900">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-pink-200 bg-pink-50 px-4 py-2 text-pink-900 placeholder-pink-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-pink-900">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border border-pink-200 bg-pink-50 px-4 py-2 text-pink-900 placeholder-pink-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200" placeholder="Say hello..." />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full rounded-full bg-pink-600 px-6 py-3 text-white shadow-md transition-transform hover:scale-[1.01] hover:bg-pink-700 active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
