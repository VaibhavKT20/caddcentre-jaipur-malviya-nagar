// AvailableLocations.js
import React from "react";

const states = [
  "Haryana",
  "Tamil Nadu",
  "Karnataka",
  "Kerala",
  "Bihar",
  "Maharashtra",
  "Jammu and Kashmir",
  "Delhi",
  "Gujarat",
  "Punjab",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Himachal Pradesh",
];

const AvailableLocations = () => {
  const firstRow = states.slice(0, 7);
  const secondRow = states.slice(7);

  return (
    <div className="w-full bg-white py-4 px-2">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        Available Locations
      </h2>

      <div className="max-w-6xl mx-auto space-y-4">
        {/* First Row - 7 states */}
        <div className="flex flex-wrap justify-center gap-2">
          {firstRow.map((state) => (
            <a
              key={state}
              href="#"
              className="min-w-[150px] whitespace-nowrap bg-red-600 text-white py-3 px-5 text-center rounded-md text-base font-medium hover:bg-gray-200 hover:text-black transition-all"
            >
              {state}
            </a>
          ))}
        </div>

        {/* Second Row - 7 states */}
        <div className="flex flex-wrap justify-center gap-2">
          {secondRow.map((state) => (
            <a
              key={state}
              href="#"
              className="min-w-[150px] whitespace-nowrap bg-red-600 text-white py-3 px-5 text-center rounded-md text-base font-medium hover:bg-gray-200 hover:text-black transition-all"
            >
              {state}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableLocations;
