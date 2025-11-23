import React from 'react';
import { features } from "../../../data/features";
import type { Feature } from "../../../data/features";

const Features: React.FC = () => {
  return (
    <section className="px-10 py-20 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
      {features.map((feature: Feature, index: number) => (
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
