import React from "react";

const Hero: React.FC = () => {
  const goToChallenges = () => {
    window.location.href = "/challenge";
  };

  const joinExternal = () => {
    window.open(
      "https://x.com/i/communities/1983062242292822298",
      "_blank"
    );
  };

  return (
    <section className="relative text-center px-6 py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Neon background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-pink-500/30 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-cyan-400 drop-shadow-[0_0_20px_cyan] font-mono">
          Bringing Together Malaysian Devs & Vibe Coders
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
          A community for builders, dreamers, and tech rebels shaping the
          future of Malaysia.
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={joinExternal}
            className="px-8 py-4 rounded-xl font-bold text-black bg-cyan-400 shadow-[0_0_15px_cyan] hover:shadow-[0_0_25px_cyan] transition-all"
          >
            Join The Movement
          </button>
          <button
            onClick={goToChallenges}
            className="px-8 py-4 rounded-xl font-bold text-white bg-transparent border-2 border-cyan-400 shadow-[0_0_15px_cyan] hover:bg-cyan-500 hover:shadow-[0_0_25px_cyan] transition-all"
          >
            Go to Challenges 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
