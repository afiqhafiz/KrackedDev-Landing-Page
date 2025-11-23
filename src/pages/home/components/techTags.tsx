import React from "react";
import { Tag } from "antd";
import { techTags } from "../../../data/techTags";

const TechTags: React.FC = () => {
  return (
    <div className="flex justify-center flex-wrap gap-3 mb-10">
      {techTags.map((tag, idx) => (
        <Tag key={idx} color="geekblue">
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TechTags;
