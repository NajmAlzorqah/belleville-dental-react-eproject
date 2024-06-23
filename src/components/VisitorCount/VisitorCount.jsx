import React, { useEffect, useState } from "react";
import eye from "/assets/eye-icon-white.svg"; // Importing the eye icon for visitor count

/**
 * VisitorCount Component
 *
 * This component displays and updates the count of visitors to the website.
 * It uses local storage to persist the visitor count across sessions.
 */
const VisitorCount = () => {
  // State to manage the visitor count
  const [visitorCount, setVisitorCount] = useState(0);

  /**
   * useEffect Hook
   *
   * This hook updates the visitor count in local storage and sets it in the component's state.
   * It runs once on component mount.
   */
  useEffect(() => {
    /**
     * Function to update visitor count
     */
    const updateVisitorCount = () => {
      // Retrieve the current visitor count from local storage
      const storedVisitorCount =
        parseInt(localStorage.getItem("visitor-count"), 10) || 0;
      // Calculate the new visitor count by incrementing the stored count
      const newVisitorCount = storedVisitorCount + 1;
      // Update local storage with the new visitor count
      localStorage.setItem("visitor-count", newVisitorCount.toString());
      // Update the component state with the new visitor count
      setVisitorCount(newVisitorCount);
    };

    // Call the update function only once on component mount
    updateVisitorCount();
  }, []); // Empty dependency array ensures this effect runs only once

  /**
   * Renders the VisitorCount component with the current visitor count and an icon.
   */
  return (
    <div className="visitors-count">
      {/* Eye icon for visitor count */}
      <img src={eye} alt="icon" />
      {/* Display the current visitor count */}
      <p>{visitorCount}</p>
    </div>
  );
};

export default VisitorCount;
