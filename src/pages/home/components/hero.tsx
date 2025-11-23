import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center px-6 py-28 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
        Bringing Together Malaysian Devs & Vibe Coders
      </h2>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto">
        A community for builders, dreamers, and tech rebels shaping the future
        of Malaysia.
      </p>
      <button className="mt-10 bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl text-lg font-bold">
        Join The Movement
      </button>
    </section>
  );
};

export default Hero;
