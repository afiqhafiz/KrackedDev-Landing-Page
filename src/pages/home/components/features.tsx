import React from 'react';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: '👥',
    title: 'United Devs',
    description:
      'From junior to senior, frontend to blockchain — if you build, you belong.',
  },
  {
    icon: '💻',
    title: 'Open Source & Collabs',
    description:
      'Hack nights, mini products, knowledge drops, and skill leveling.',
  },
  {
    icon: '⚡',
    title: 'Community Energy',
    description:
      'We share jobs, memes, frameworks, rants — all with Malaysian flavour.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="px-10 py-20 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:scale-105 transform transition"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
