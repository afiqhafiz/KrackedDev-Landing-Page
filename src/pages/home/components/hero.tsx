import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const goToChallenges = () => {
    navigate("/challenge"); // Internal page
  };

  const joinExternal = () => {
    window.open("https://x.com/i/communities/1983062242292822298", "_blank");
  };

  return (
    <section className="text-center px-6 py-28 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
        Bringing Together Malaysian Devs & Vibe Coders
      </h2>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto">
        A community for builders, dreamers, and tech rebels shaping the future of Malaysia.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        {/* Redirect to X communities */}
        <button
          className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl text-lg font-bold"
          onClick={joinExternal}
        >
          Join The Movement
        </button>

        {/* Redirect to Challenge Page */}
        <button
          className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-xl text-lg font-bold"
          onClick={goToChallenges}
        >
          Go to Challenges 🚀
        </button>
      </div>
    </section>
  );
};

export default Hero;
