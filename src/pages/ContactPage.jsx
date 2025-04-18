// ContactPage.js
import React from "react";
import ContactDetails from "../components/ContactDetails";
import LocationMap from "../components/LocationMap";
import AvailableLocations from "../components/AvailableLocations";

const ContactPage = () => {
  return (
    <div className="w-full bg-white text-black">
      {/* Contact Section */}
      <div className="px-4 pt-10 pb-4">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <ContactDetails />
          <LocationMap />
        </div>
      </div>

      {/* Available Locations Section (right below, no large gap) */}
      <div className="px-4 pt-2 pb-6">
        <AvailableLocations />
      </div>
    </div>
  );
};

export default ContactPage;
