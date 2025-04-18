import React from "react";
import FooterSectionOne from "../components/FooterSectionOne"; // adjust path as needed
import FooterSectionTwo from "../components/FooterSectionTwo";
import FooterSectionThree from "../components/FooterSectionThree";
import FooterSectionForth from "../components/FooterSectionForth";

const FooterPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Footer component */}
      <FooterSectionOne />
      <FooterSectionTwo />
      <FooterSectionThree />
      <FooterSectionForth />
    </div>
  );
};

export default FooterPage;
