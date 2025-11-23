import React from "react";
import { challenges } from "../../data/challenge";
import { motion } from "framer-motion";

const ChallengePage: React.FC = () => {
  return (
    <section className="relative px-6 py-20 max-w-6xl mx-auto">
      {/* Page Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-cyan-400 font-mono relative z-10 tracking-wide">
        Bounty Challenges
      </h2>

      {/* Challenges Grid */}
      <div className="grid gap-12 md:grid-cols-2 relative z-10">
        {challenges.map((ch, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group relative cursor-pointer rounded-xl overflow-hidden"
          >
            {/* Neon gradient glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-violet-500 opacity-50 blur-2xl group-hover:opacity-80 transition-all duration-500"></div>

            {/* Frosted glass card */}
            <div className="relative p-8 bg-black/70 backdrop-blur-md rounded-xl flex flex-col justify-between h-full border border-gray-800">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400 font-mono tracking-tight group-hover:text-pink-400 transition-colors duration-300">
                {ch.title}
              </h3>
              <p className="text-gray-300 mb-6">{ch.description}</p>

              <motion.span
                whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block bg-pink-500 text-black px-4 py-2 rounded-full font-mono font-semibold"
              >
                {ch.bounty}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChallengePage;
