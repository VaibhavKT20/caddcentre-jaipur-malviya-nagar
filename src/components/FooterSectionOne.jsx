import React from "react";

const FooterSectionOne = () => {
  return (
    <footer className="bg-white text-gray-600 border-t-4 border-red-500 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Corporate Headquarters */}
        <div className="md:col-span-2 flex flex-col justify-between pr-8">
          <div className="mb-6">
            <h2 className="text-red-600 text-base mb-3">
              Corporate Headquarters
            </h2>
            <p className="leading-relaxed mb-6">
              1st Floor, K.R. Ahamed Sha Office Complex,
              <br />
              No. 25, Dr. Radhakrishnan Salai, Mylapore,
              <br />
              Chennai - 600 004, Tamil Nadu, India.
            </p>
          </div>
          <div className="mt-auto pt-2">
            <img
              src="cadd_centre_logo.svg"
              alt="CADD CENTRE"
              className="h-10 object-contain"
            />
          </div>
        </div>

        {/* Company */}
        <div className="pl-4">
          <h2 className="text-red-600 text-base mb-3">Company</h2>
          <ul className="space-y-2">
            {[
              "About Us",
              "Job Fair",
              "Newsroom",
              "Blog",
              "Newsletter",
              "Contact Us",
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

        {/* Top Stream */}
        <div className="pl-4">
          <h2 className="text-red-600 text-base mb-3">Top Stream</h2>
          <ul className="space-y-2">
            {[
              "Mechanical CADD",
              "Civil CADD",
              "Architectural CADD",
              "Electrical CADD",
              "Building Information Modeling",
              "Information Technology",
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

        {/* Certifications */}
        <div className="pl-12">
          <h2 className="text-red-600 text-base mb-3">Certifications</h2>
          <ul className="space-y-2">
            {[
              "Proficient Certificate",
              "Master Certificate",
              "Expert Certificate",
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
      </div>
    </footer>
  );
};

export default FooterSectionOne;
