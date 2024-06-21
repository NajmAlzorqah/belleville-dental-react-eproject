// VisitorCount.jsx
import React, { useEffect, useState } from "react";
import eye from "/assets/eye-icon-white.svg";

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const updateVisitorCount = () => {
      const storedVisitorCount =
        parseInt(localStorage.getItem("visitor-count"), 10) || 0;
      const newVisitorCount = storedVisitorCount + 1;
      localStorage.setItem("visitor-count", newVisitorCount.toString());
      setVisitorCount(newVisitorCount);
    };

    // Call the update function only once on component mount
    updateVisitorCount();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="visitors-count">
      <img src={eye} alt="icon" />
      <p>{visitorCount}</p>
    </div>
  );
};

export default VisitorCount;
