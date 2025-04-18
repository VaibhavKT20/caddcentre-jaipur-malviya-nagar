import React from "react";

const InformationTechnologyCADD = () => {
  const tools = [
    { name: "Python", link: "#" },
    { name: "Robotics", link: "#" },
    { name: "IOT", link: "#" },
    { name: "Ethical Hacking", link: "#" },
    { name: "C", link: "#" },
    { name: "C++", link: "#" },
    { name: "Java", link: "#" },
  ];

  return (
    <div className="w-full bg-[#fce7d6] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Text & Tools */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Information Technology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              CADD Centre's ground-breaking courses on Python, Java, and data
              analytics open doors to cutting-edge opportunities. Gain practical
              exposure through domain-based projects, empowering you for
              thriving IT careers.
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
                src="src\BranchImage\python.jpg"
                alt="Expert Certificate in Python"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">
                    Expert Certificate in Python
                  </h4>
                  <p className="text-sm text-gray-700 mb-1">
                    100 Hours | In-centre
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
                src="src\BranchImage\java.jpg"
                alt="Expert Certificate in Java"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">
                    Expert Certificate in Java
                  </h4>
                  <p className="text-sm text-gray-700 mb-1">
                    90 Hours | In-centre
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

export default InformationTechnologyCADD;
