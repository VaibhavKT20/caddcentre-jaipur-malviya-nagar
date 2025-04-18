import React, { useState } from "react";
import {
  FaShoppingCart,
  FaGraduationCap,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-50 border-b border-gray-200 shadow-md">
      {/* Desktop View (Two Headers) */}
      <div className="hidden md:flex justify-between items-center px-6 md:px-12 lg:px-24 py-3">
        {/* First Header */}
        <nav className="flex space-x-6 text-sm">
          {[
            "Overseas",
            "Student Value-Adds",
            "Locate Us",
            "Students Placed",
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#shop"
            className="text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md transition duration-300 flex items-center"
          >
            <FaShoppingCart className="mr-2" size={16} /> Shop
          </a>
        </nav>

        {/* Contact Info & Login */}
        <div className="flex items-center space-x-6">
          <a href="https://example.com/first-job-pakka">
            <img
              src="/firstjobpakka-topbar.svg"
              alt="First Job Pakka!"
              className="h-10 cursor-pointer"
            />
          </a>
          <div className="flex flex-col items-start">
            <a
              href="tel:+919884385095"
              className="text-gray-600 hover:text-blue-600 text-sm"
            >
              +91 9884385095
            </a>
            <span className="text-red-600 text-xs">
              (Weekdays 10 AM to 6 PM)
            </span>
          </div>
          <a
            href="#student-login"
            className="px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-300 flex items-center text-sm"
          >
            <FaGraduationCap className="mr-2" size={16} /> Student Login
          </a>
        </div>
      </div>

      {/* Second Header (Main Navigation) */}
      <div className="hidden md:flex justify-between items-center px-6 md:px-12 lg:px-24 py-4 bg-white border-b border-gray-200">
        <a
          href="https://caddcentre.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cadd_centre_logo.svg"
            alt="Logo"
            className="h-12 cursor-pointer"
          />
        </a>
        <nav className="flex space-x-12 text-sm">
          {[
            "Executive Diploma",
            "Our Programs",
            "Customised Training",
            "Government Aided Training",
            "Franchise",
            "Placements",
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:text-red-600 transition duration-300 relative group cursor-pointer"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile View (Merged Header) */}
      <div className="md:hidden flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
        <a
          href="https://caddcentre.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/cadd_centre_logo.svg" alt="Logo" className="h-10" />
        </a>
        {/* Menu Button */}
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu (Collapsible) */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col bg-gray-50 border-t border-gray-200 px-6 py-4 space-y-3 text-sm">
          {[
            "Overseas",
            "Student Value-Adds",
            "Locate Us",
            "Students Placed",
            "Shop",
            "Executive Diploma",
            "Our Programs",
            "Customised Training",
            "Government Aided Training",
            "Franchise",
            "Placements",
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-700 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#student-login"
            className="px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-300 flex items-center text-sm"
          >
            <FaGraduationCap className="mr-2" size={16} /> Student Login
          </a>
        </nav>
      )}
    </header>
  );
};

export default ResponsiveHeader;
