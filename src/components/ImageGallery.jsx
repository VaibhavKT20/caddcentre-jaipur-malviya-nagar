import React, { useState, useEffect } from "react";
import { FaTimes, FaDownload, FaPlay, FaPause } from "react-icons/fa";

const images = [
  "images/SRL-image-0.jpg",
  "images/SRL-image-1.jpg",
  "images/SRL-image-2.jpg",
  "images/SRL-image-3.jpg",
  "images/SRL-image-4.jpg",
  "images/SRL-image-5.jpg",
  "images/SRL-image-6.jpg",
  "images/SRL-image-7.jpg",
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let slideTimer;
    let progressTimer;

    if (selectedIndex !== null && isPlaying) {
      setProgress(0);
      let step = 0;
      progressTimer = setInterval(() => {
        step += 100 / 30;
        setProgress(step);
      }, 100);

      slideTimer = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
        setProgress(0);
      }, 3000);
    }

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressTimer);
    };
  }, [selectedIndex, isPlaying]);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsPlaying(false);
    setProgress(0);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setIsPlaying(false);
    setProgress(0);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[selectedIndex];
    link.download = `image${selectedIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-[#fbe7d0] pt-10 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[5/3] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={src}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <img
            src={images[selectedIndex]}
            alt={`Full Image ${selectedIndex}`}
            className="max-h-[90vh] max-w-[90vw] object-contain transition-all duration-300"
          />

          {/* Controls */}
          <div className="absolute top-4 right-4 flex items-center space-x-4 text-white">
            <button
              onClick={handleDownload}
              className="cursor-pointer hover:text-red-400 transition"
              title="Download"
            >
              <FaDownload size={24} />
            </button>
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="cursor-pointer hover:text-green-400 transition"
              title="Play/Pause"
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </button>
            <button
              onClick={handleClose}
              className="cursor-pointer hover:text-gray-400 transition"
              title="Close"
            >
              <FaTimes size={28} />
            </button>
          </div>

          {/* Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-6 w-1/2 h-2 bg-gray-700 rounded overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
