import React from "react";

const MechanicalCADD = () => {
  const tools = [
    { name: "AutoCAD", link: "#" },
    { name: "ANSYS", link: "#" },
    { name: "NX CAD", link: "#" },
    { name: "CREO", link: "#" },
    { name: "Solidworks", link: "#" },
    { name: "Autodesk Inventor", link: "#" },
  ];

  return (
    <div className="w-full bg-[#fce7d6] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Text & Tools */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Mechanical CADD
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mechanical engineering's dynamic world demands mastery of CAD
              tools for students and professionals. Unlocking this power leads
              to triumph in Product Design and exciting career advancements.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <a
                  href={tool.link}
                  key={tool.name}
                  className="text-center border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-3 py-2 text-sm font-medium h-10 flex items-center justify-center"
                  style={{ borderRadius: "0px", minWidth: "100px" }}
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Cards */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row md:gap-4 lg:gap-6 lg:ml-12">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md w-full md:w-[90%] lg:w-[70%] flex flex-col">
              <img
                src="src\BranchImage\product-design.jpg"
                alt="Product Design"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">
                    Master Certificate in Product Design
                  </h4>
                  <p className="text-sm text-gray-700 mb-1">
                    160 Hours | In-centre
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    Software: AutoCAD | Solidworks
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-auto text-center border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-3 py-1.5 rounded-md text-sm font-medium flex justify-center"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md w-full md:w-[90%] lg:w-[70%] flex flex-col">
              <img
                src="src\BranchImage\mep-design.jpg"
                alt="MEP Design"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">
                    Master Certificate in MEP Design
                  </h4>
                  <p className="text-sm text-gray-700 mb-1">
                    160 Hours | In-centre
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    Software: AutoCAD | Revit MEP
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-auto text-center border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-3 py-1.5 rounded-md text-sm font-medium flex justify-center"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalCADD;
