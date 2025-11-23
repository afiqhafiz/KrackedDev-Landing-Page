import React from 'react';

const ChallengePage: React.FC = () => {
  const challenges = [
    {
      title: 'Build a Mini Wallet',
      description: 'Create a simple crypto wallet app and submit your repo.',
      bounty: '500 MYR',
    },
    {
      title: 'Frontend UI Challenge',
      description: 'Design a responsive dashboard using Tailwind or AntD.',
      bounty: '300 MYR',
    },
  ];

  return (
    <section className="px-10 py-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Bounty Challenges
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
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
