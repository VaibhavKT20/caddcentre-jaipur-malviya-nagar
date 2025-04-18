import React from "react";

const HighlightCard = ({ image, count, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <img src={image} alt={description} className="w-14 h-14 mb-4" />
      <h3 className="text-xl font-bold text-red-600">{count}</h3>
      <p className="text-gray-700 mt-1">{description}</p>
    </div>
  );
};

export default HighlightCard;
