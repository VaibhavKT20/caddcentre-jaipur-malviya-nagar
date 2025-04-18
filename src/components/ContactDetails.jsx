import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="space-y-8 ml-34 p-6">
      {/* Added padding around the whole container */}
      <div>
        <h2 className="text-red-600 text-4xl font-normal">CADD Centre</h2>
        {/* Increased font size */}
        <h3 className="text-4xl font-bold">Jaipur, Malviya Nagar</h3>
        {/* Increased font size */}
      </div>
      <div className="flex items-start gap-4">
        {/* Increased gap between icon and text */}
        <MapPin className="mt-1 text-2xl" /> {/* Increased icon size */}
        <span className="text-xl">
          Plot No 7, Hanuman colony, Model Town, Malviya Nagar
        </span>{" "}
        {/* Increased text size */}
      </div>
      <div className="flex items-center gap-4">
        {/* Increased gap between icon and text */}
        <Mail className="text-2xl" /> {/* Increased icon size */}
        <a
          href="mailto:rj.jaipurmalviyanagar@caddcentre.com"
          className="hover:underline text-xl"
        >
          rj.jaipurmalviyanagar@caddcentre.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        {/* Increased gap between icon and text */}
        <Phone className="text-2xl" /> {/* Increased icon size */}
        <a href="tel:9414620213" className="font-bold text-2xl hover:underline">
          9414620213
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
