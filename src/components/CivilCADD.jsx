import React from "react";

const MechanicalCADD = () => {
  const tools = [
    { name: "AutoCAD Civil", link: "#" },
    { name: "ETABS", link: "#" },
    { name: "SketchUp", link: "#" },
    { name: "Revit Architecture", link: "#" },
    { name: "AutoCAD Electrical", link: "#" },
  ];

  return (
    <div className="w-full bg-[#ffffff] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Cards */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row md:gap-4 lg:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md w-full md:w-[90%] lg:w-[80%] flex flex-col">
              <img
                src="bim.jpg"
                alt="Product Design"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">
                    Master Certificate in BIM
                  </h4>
                  <p className="text-sm text-gray-700 mb-1">
                    160 Hours | In-centre
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    Software: AutoCAD | Revit Architecture | Civil 3D
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
            <div className="bg-white rounded-lg shadow-md w-full md:w-[90%] lg:w-[80%] flex flex-col">
              <img
                src="architcture.jpg"
                alt="MEP Design"
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
                    Software: AutoCAD | Sketchup | 3ds MAX
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

          {/* Right Side: Text & Tools */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:ml-12">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Civil & Architectural CADD
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Embracing CAD technology empowers civil engineers and architects
              to turn creative visions into reality. Learning CAD and
              visualization tools optimizes the design process, from concept to
              execution.
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
        </div>
      </div>
    </div>
  );
};

export default MechanicalCADD;
