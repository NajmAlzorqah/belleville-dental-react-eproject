// Loader.jsx

import React, { useEffect } from "react";
import "./Loader.css"; // Ensure correct path to Loader.css

const Loader = () => {
  useEffect(() => {
    // This effect runs once when component mounts
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hide"); // Initially hide the loader
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="loader" id="loader">
      <svg
        className="loader-container"
        x="0px"
        y="0px"
        viewBox="0 0 50 31.25"
        height="31.25"
        width="50"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          className="track"
          strokeWidth="4"
          fill="none"
          pathLength="100"
          d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
        />
        <path
          className="car"
          strokeWidth="4"
          fill="none"
          pathLength="100"
          d="M0.625 21.5 h10.25 l3.75 -5.875 l7.375 15 l9.75 -30 l7.375 20.875 v0 h10.25"
        />
      </svg>
    </div>
  );
};

export default Loader;
