import React from "react";
import { techTags } from "../../../data/techTags";

const TechTags: React.FC = () => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-10">
      {techTags.map((tag, idx) => (
        <span
          key={idx}
          className="px-4 py-1 rounded-full text-cyan-400 border border-cyan-400 text-sm font-mono transition-colors duration-200 hover:bg-cyan-400 hover:text-black"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TechTags;
