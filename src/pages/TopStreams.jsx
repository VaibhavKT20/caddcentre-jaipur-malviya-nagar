import React from "react";
import MechanicalCADD from "../components/MechanicalCADD";
import CivilCADD from "../components/CivilCADD";
import ITCADD from "../components/ITCADD";

const TopStreams = () => {
  return (
    <div className="w-full bg-white">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
        Top Streams
      </h2>
      <MechanicalCADD />
      <CivilCADD />
      <ITCADD />
    </div>
  );
};

export default TopStreams;
