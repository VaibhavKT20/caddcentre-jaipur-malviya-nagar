import React from "react";

const FourthFooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-red-600 text-white text-sm py-4 border-t border-red-500">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        {/* Left Side */}
        <p className="text-center md:text-left text-base">
          © CADD Centre {currentYear}, All rights reserved
        </p>

        {/* Right Side */}
        <div className="flex flex-wrap justify-center md:justify-end items-center text-white text-base">
          {[
            "Student login",
            "Certificate Interpretation",
            "Privacy Policy",
            "Sitemap",
          ].map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-2 text-white">|</span>}
              <a
                href="#"
                className="hover:text-black hover:no-underline transition-colors duration-200"
              >
                {item}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthFooterSection;
