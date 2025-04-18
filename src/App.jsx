import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BannerPage from "./pages/BannerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banner" element={<BannerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
