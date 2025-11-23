import React from 'react';

const techs = ['React', 'Node', 'Blockchain', 'DevOps', 'AI / ML', 'Mobile'];

const TechTags: React.FC = () => {
  return (
    <section className="text-center mb-20">
      {techs.map((tech) => (
        <span
          key={tech}
          className="inline-block bg-gray-700 text-white px-4 py-1 rounded-full m-1 text-sm"
        >
          {tech}
        </span>
      ))}
    </section>
  );
};

export default TechTags;
