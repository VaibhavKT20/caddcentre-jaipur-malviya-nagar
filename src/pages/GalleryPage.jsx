// pages/GalleryPage.js
import React from "react";
import ImageGallery from "../components/ImageGallery";
import StudentProjectsPage from "./StudentProjectsPage";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-8">
      <ImageGallery />
      <StudentProjectsPage />
    </div>
  );
};

export default GalleryPage;
