import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate(); // initialize navigate

  const goToChallenges = () => {
    navigate("/challenge"); // navigate internally
  };

  const joinExternal = () => {
    window.open(
      "https://x.com/i/communities/1983062242292822298",
      "_blank"
    );
  };

  return (
    <section className="relative text-center px-6 py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* ...rest of your JSX */}
      <div className="flex justify-center gap-6">
        <button
          onClick={joinExternal}
          className="px-8 py-4 rounded-xl font-bold text-black bg-cyan-400 shadow-[0_0_15px_cyan] hover:shadow-[0_0_25px_cyan] transition-all"
        >
          Join The Movement
        </button>
        <button
          onClick={goToChallenges} // internal navigation
          className="px-8 py-4 rounded-xl font-bold text-white bg-transparent border-2 border-cyan-400 shadow-[0_0_15px_cyan] hover:bg-cyan-500 hover:shadow-[0_0_25px_cyan] transition-all"
        >
          Go to Challenges 🚀
        </button>
      </div>
    </section>
  );
};

export default Hero;
