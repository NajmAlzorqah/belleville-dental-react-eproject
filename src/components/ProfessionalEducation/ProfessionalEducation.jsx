import React, { useEffect, useState } from "react";
import useScrollAnimation from "../../Hooks/useScrollAnimation"; // Ensure this hook is correctly imported
import "./ProfessionalEducation.css";
import "../../Hooks/scrollAnimation.css"; // Import global scroll animation CSS

const ProfessionalEducation = () => {
  useScrollAnimation(".delay", "show"); // Apply scroll animation to elements with .delay class
  useScrollAnimation(".opacity-element", "show-opacity"); // Apply opacity animation to elements with .opacity-element class
  useScrollAnimation(".hidden", "show"); // Apply scroll animation to hidden elements

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState("all");

  // Fetch data from data.json on component mount
  useEffect(() => {
    fetch("./data.json") // Adjust path based on your project setup
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
        setFilteredItems(data.items.slice(0, 3)); // Displaying 3 initial items
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs once on mount

  // Handle filtering logic
  const handleFiltering = (event) => {
    const filterValue = event.target.getAttribute("data-filter");
    setFilter(filterValue);

    // Filter items based on filterValue
    if (filterValue === "all") {
      setFilteredItems(items.slice(0, 4)); // Displaying 4 items for "All"
    } else {
      const filtered = items.filter((item) => item.type === filterValue);
      setFilteredItems(filtered.slice(0, 4)); // Displaying 4 filtered items
    }
  };

  return (
    <section id="professional" className="opacity-element hidden">
      <div className="professional">
        <h2 className="separator opacity-element hidden">
          <span>Professional</span> Education
        </h2>
        <div className="category">
          {/* Filter buttons with dynamic classNames and onClick handler */}
          <button
            className={`filter-link category-item ${
              filter === "all" ? "active" : ""
            }`}
            data-filter="all"
            onClick={handleFiltering}
          >
            All
          </button>
          <button
            className={`filter-link category-item ${
              filter === "related-courses" ? "active" : ""
            }`}
            data-filter="related-courses"
            onClick={handleFiltering}
          >
            Related Courses
          </button>
          <button
            className={`filter-link category-item ${
              filter === "help-document" ? "active" : ""
            }`}
            data-filter="help-document"
            onClick={handleFiltering}
          >
            Help Document
          </button>
          <button
            className={`filter-link category-item ${
              filter === "faculty-resources" ? "active" : ""
            }`}
            data-filter="faculty-resources"
            onClick={handleFiltering}
          >
            Faculty Resources
          </button>
          <button
            className={`filter-link category-item ${
              filter === "student-resources" ? "active" : ""
            }`}
            data-filter="student-resources"
            onClick={handleFiltering}
          >
            Student Resources
          </button>
          <button
            className={`filter-link category-item ${
              filter === "case-studies" ? "active" : ""
            }`}
            data-filter="case-studies"
            onClick={handleFiltering}
          >
            Case Studies
          </button>
        </div>

        <div className="professional-list">
          {/* Render filteredItems dynamically */}
          {filteredItems.map((item) => (
            <div className={`item ${item.type} delay hidden`} key={item.id}>
              <img src={item.image} alt={item.alt} />
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="read-more">
                  <a href="#">Read More</a>
                  <svg
                    height="50" // Adjust height as per your design
                    width="50" // Adjust width as per your design
                    viewBox="0 0 227.096 227.096"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      style={{ fill: "#010002" }} // Adjust fill color as needed
                      points="152.835,39.285 146.933,45.183 211.113,109.373 0,109.373 0,117.723 211.124,117.723 146.933,181.902 152.835,187.811 227.096,113.55"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalEducation;
