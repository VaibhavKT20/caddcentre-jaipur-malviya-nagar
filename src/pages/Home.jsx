import React from "react";
import ResponsiveHeader from "../components/ResponsiveHeader";
import Banner from "../components/Banner";
import CaddCentrePage from "../pages/CaddCentrePage";
import HighlightCard from "../components/HighlightCard";
import TopStreams from "./TopStreams";
import ContactPage from "./ContactPage";
import LocationsPage from "./LocationsPage";
import GalleryPage from "./GalleryPage";
import StudentProjectsPage from "./StudentProjectsPage";
import FooterPage from "./FooterPage";

const Home = () => {
  return (
    <div>
      <ResponsiveHeader />
      <Banner />
      <CaddCentrePage />
      <TopStreams />
      <ContactPage />
      {/* <LocationsPage /> */}
      <GalleryPage />
      {/* <StudentProjectsPage /> */}
      <FooterPage />
    </div>
  );
};

export default Home;
