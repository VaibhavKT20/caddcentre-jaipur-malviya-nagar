import React from "react";
import ProjectCard from "../components/ProjectCard";

const StudentProjectsPage = () => {
  return (
    <div className="w-full bg-white pt-10 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Student Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard image="src\\assets\\Rajesh.jpg" />
          <ProjectCard image="src\\assets\\Vignesh.jpg" />
          <ProjectCard image="src\\assets\\Sreesankar.jpg" />
        </div>
      </div>
    </div>
  );
};

export default StudentProjectsPage;
