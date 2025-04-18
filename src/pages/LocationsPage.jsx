// LocationsPage.js
import React from "react";
import AvailableLocations from "../components/AvailableLocations";

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col items-center justify-start py-2">
      <AvailableLocations />
    </div>
  );
};

export default LocationsPage;
