import React from "react";

const ProjectCard = ({ image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt="Student Project"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProjectCard;
