import React from "react";
import { challenges } from "../../data/challenge";

const ChallengePage: React.FC = () => {
  return (
    <section className="px-10 py-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Bounty Challenges</h2>
      <div className="grid gap-8 md:grid-cols-2 mb-10">
        {challenges.map((ch, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:scale-105 transform transition"
          >
            <h3 className="text-xl font-bold mb-2 text-pink-500">{ch.title}</h3>
            <p className="text-gray-300 mb-4">{ch.description}</p>
            <span className="inline-block bg-pink-600 text-black px-3 py-1 rounded-full font-semibold">
              {ch.bounty}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengePage;
