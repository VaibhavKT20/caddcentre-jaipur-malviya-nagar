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
      {/* First Header (Desktop) */}
      <div className="hidden md:flex justify-between items-center px-6 md:px-12 lg:px-24 py-2">
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
              className="text-gray-700 hover:bg-red-500 hover:text-white px-3 py-1 rounded-md transition duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#shop"
            className="text-gray-700 hover:bg-red-500 hover:text-white px-3 py-1 rounded-md transition duration-300 flex items-center"
          >
            <FaShoppingCart className="mr-2" size={16} /> Shop
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <a href="https://example.com/first-job-pakka">
            <img
              src="/firstjobpakka-topbar.svg"
              alt="First Job Pakka!"
              className="h-8 cursor-pointer"
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
            href="https://lms.caddcentre.com/webapp/login"
            rel="noopener noreferrer"
            className="px-3 py-1 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-300 flex items-center text-sm"
          >
            <FaGraduationCap className="mr-2" size={16} /> Student Login
          </a>
        </div>
      </div>

      {/* Added More Space Between the Two Headers */}
      <div className="hidden md:block h-4"></div>

      {/* Second Header (Fixed: Links at Bottom) */}
      <div className="hidden md:flex justify-between items-end px-6 md:px-12 lg:px-24 py-6 bg-white border-b border-gray-200">
        {/* Logo on the Left */}
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

        {/* Navigation Links - Now Pushed to Bottom */}
        <nav className="flex space-x-8 text-sm self-end pb-1">
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

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
        <a
          href="https://caddcentre.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/cadd_centre_logo.svg" alt="Logo" className="h-10" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-gray-50 border-t border-gray-200 px-6 py-4 space-y-3 text-sm">
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
            href="https://lms.caddcentre.com/webapp/login"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-300 flex items-center text-sm"
          >
            <FaGraduationCap className="mr-2" size={16} /> Student Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
