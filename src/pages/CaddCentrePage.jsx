import React from "react";
import HeroSection from "../components/HeroSection";
import HighlightCard from "../components/HighlightCard";
import EnquiryForm from "../components/EnquiryForm";

// Assets
import professionals from "../assets/professionals.png";
import training from "../assets/training.png";
import globe from "../assets/globe.png";
import course from "../assets/course.png";

const CaddCentrePage = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left section */}
        <div className="w-full md:w-[60%]">
          <HeroSection />

          {/* Horizontal Line Divider */}
          <div className="w-full h-px bg-gray-300 my-4" />

          {/* Highlight Cards in a row */}
          <div className="flex justify-start items-start gap-4 mt-4 overflow-x-auto">
            <HighlightCard
              image={professionals}
              count="2M+"
              description="Professionals Trained"
            />
            <HighlightCard
              image={training}
              count="730"
              description="Training Centres"
            />
            <HighlightCard
              image={globe}
              count="24"
              description="Global Locations"
            />
            <HighlightCard
              image={course}
              count="100+"
              description="Industry Courses"
            />
          </div>
        </div>

        {/* Right section: Form */}
        <div className="w-full md:w-[35%]">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default CaddCentrePage;
