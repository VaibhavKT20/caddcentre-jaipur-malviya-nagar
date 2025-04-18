import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterSectionThree = () => {
  return (
    <footer className="bg-white text-gray-600 text-sm py-10 border-t-4 border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-14 items-start">
        {/* Support */}
        <div className="space-y-4 px-4">
          <p className="text-red-600 text-base mb-3">Support</p>
          <ul className="space-y-2">
            {[
              "Feedback",
              "Customer Support",
              "Business Enquiry",
              "General Contact",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community & Events */}
        <div className="space-y-4 px-4">
          <p className="text-red-600 text-base mb-3">Community & Events</p>
          <ul className="space-y-2">
            {["Engineering, Technology & Careers (ETC)", "Imagineer"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-red-600 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Student Value-ads */}
        <div className="space-y-4 px-4">
          <p className="text-red-600 text-base mb-3">Student Value-ads</p>
          <ul className="space-y-2">
            {[
              "Student login",
              "Certificate Interpretation",
              "Privacy Policy",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div className="space-y-6 px-4">
          <p className="text-red-600 text-base mb-3">Get in touch</p>

          {/* Compact and wide tilted red box */}
          <div className="bg-red-600 text-white px-10 py-2 w-full max-w-[750px] transform -skew-x-[18deg] shadow-md">
            <div className="transform skew-x-[18deg] flex flex-col items-center justify-center">
              <div className="flex items-center space-x-3">
                <img src="/call.svg" alt="Call Icon" className="w-5 h-5" />
                <p className="text-base font-semibold whitespace-nowrap">
                  +91 9884385095
                </p>
              </div>
              <p className="text-xs mt-1 text-center">
                (Weekdays 10 AM to 6 PM)
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              FaFacebookF,
              FaInstagram,
              FaXTwitter,
              FaLinkedinIn,
              FaYoutube,
            ].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-gray-700 hover:text-red-600 border border-gray-300 rounded-full p-2"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSectionThree;
