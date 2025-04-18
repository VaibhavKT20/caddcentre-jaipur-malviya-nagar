import React from "react";

const FooterSectionTwo = () => {
  return (
    <footer className="bg-white text-gray-600 text-sm py-10 border-t-4 border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* Mechanical */}
        <div className="space-y-4">
          <p className="text-red-600 text-base mb-3">Mechanical</p>
          <ul className="space-y-2">
            {["AutoCAD Mechanical", "ANSYS", "CREO", "NX CAD", "Revit MEP"].map(
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

        {/* Architecture, Engineering & Construction */}
        <div className="space-y-4">
          <p className="text-red-600 text-base mb-3">
            Architecture, Engineering & Construction
          </p>
          <ul className="space-y-2">
            {[
              "AutoCAD Electrical",
              "AutoCAD Civil",
              "3Ds Max (Max for Engineers)",
              "STAAD Pro",
              "5D BIM",
              "5D BIM Using Navisworks",
              "Revit Architecture",
              "SketchUp",
              "V-Ray",
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

        {/* Information Technology & Project Management */}
        <div className="space-y-4 ml-15">
          <p className="text-red-600 text-base mb-3">Information Technology</p>
          <ul className="space-y-2">
            {[
              "C",
              "C++",
              "Ethical Hacking",
              "Java",
              "Python",
              "Robotic Design",
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
          <p className="text-red-600 text-base mt-6 mb-3">Project Management</p>
          <ul className="space-y-2">
            {["Microsoft Office With PPM", "Primavera with PPM"].map(
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

        {/* Hybrid */}
        <div className="space-y-4 ml-25">
          <p className="text-red-600 text-base mb-3">Hybrid</p>
          <ul className="space-y-2">
            {[
              "AutoCAD 3D",
              "3D Printing",
              "ANSYS Fluent",
              "Autodesk Inventor",
              "Ansys Workbench",
              "GD&T",
              "NX CAM",
              "NX Nastran",
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

export default FooterSectionTwo;
