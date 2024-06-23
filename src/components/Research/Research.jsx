import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import "./Research.css";

// Import images
import img1 from "/assets/img-1.jpg";
import img2 from "/assets/img-2.jpg";
import img3 from "/assets/img-3.jpg";
// import img4 from "/assets/research-1.jpg";

const Research = () => {
  const [ResearchEntries, setResearchEntries] = useState([]);

  useEffect(() => {
    // Fetch Research entries from your data source here
    setResearchEntries([
      {
        id: 1,
        image: img1,
        date: "2025",
        author: "Admin",
        title: "Best Traveling Place",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
      {
        id: 2,
        image: img2,
        date: "April 11 2020",
        author: "Admin",
        title: "Private Meeting Room",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
      {
        id: 3,
        image: img3,
        date: "April 12 2020",
        author: "Admin",
        title: "Conference Room",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
      {
        id: 4,
        image: img1,
        date: "April 10 2020",
        author: "Admin",
        title: "Best Traveling Place",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
      {
        id: 5,
        image: img2,
        date: "April 11 2020",
        author: "Admin",
        title: "Private Meeting Room",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
      {
        id: 6,
        image: img3,
        date: "April 12 2020",
        author: "Admin",
        title: "Conference Room",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
      {
        id: 7,
        image: img1,
        date: "April 10 2020",
        author: "Admin",
        title: "Best Traveling Place",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
      {
        id: 8,
        image: img2,
        date: "April 11 2020",
        author: "Admin",
        title: "Private Meeting Room",
        content:
          "Integer ante arcu accumsan a consectetuer eget posuere mauris praesent adipiscing phasellus ullamcorper ipsum rutrum punc.",
      },
    ]);
  }, []);

  useEffect(() => {
    // Initialize feather icons
    feather.replace();

    // Initialize scroll behavior for Research entries
    const ResearchContainer = document.querySelector(".Research-container");
    const scrollLeftBtn = document.getElementById("scroll-left");
    const scrollRightBtn = document.getElementById("scroll-right");

    const handleScroll = () => {
      if (ResearchContainer.scrollLeft === 0) {
        scrollLeftBtn.classList.add("disabled");
      } else {
        scrollLeftBtn.classList.remove("disabled");
      }

      if (
        ResearchContainer.scrollWidth - ResearchContainer.scrollLeft ===
        ResearchContainer.offsetWidth
      ) {
        scrollRightBtn.classList.add("disabled");
      } else {
        scrollRightBtn.classList.remove("disabled");
      }
    };

    scrollLeftBtn.addEventListener("click", () => {
      ResearchContainer.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    });

    scrollRightBtn.addEventListener("click", () => {
      ResearchContainer.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    });

    ResearchContainer.addEventListener("scroll", handleScroll);

    // Initial check to set the correct state of buttons
    handleScroll();

    return () => {
      scrollLeftBtn.removeEventListener("click", () => {});
      scrollRightBtn.removeEventListener("click", () => {});
      ResearchContainer.removeEventListener("scroll", handleScroll);
    };
  }, [ResearchEntries]);

  return (
    <section className="section" id="research">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h3 className="title mb-3">
                Latest <span>News</span>
              </h3>
              <p className="text-muted font-size-15">
                Et harum quidem rerum facilis est et expedita distinctio nam
                libero tempore cum soluta nobis eligendi cumque.
              </p>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <button id="scroll-left" className="scroll-btn left-btn disabled">
            &#9664;
          </button>
          <div className="row flex-nowrap overflow-auto Research-container">
            {/* Research entries will be rendered here */}
            {ResearchEntries.map((entry) => (
              <div className="col-lg-4 " key={entry.id}>
                <div className="Research-box mb-4 mb-lg-0">
                  <img
                    src={entry.image}
                    alt=""
                    className="img-fluid d-block mx-auto rounded"
                  />
                  <ul className="list-inline text-muted text-uppercase font-size-15 font-weight-medium mt-3 mb-2">
                    <li className="list-inline-item me-3">
                      <i
                        className="icon-size-15 icon me-1"
                        data-feather="calendar"
                      ></i>
                      {entry.date}
                    </li>
                    <li className="list-inline-item">
                      <i
                        className="icon-size-15 icon me-1"
                        data-feather="user"
                      ></i>
                      {entry.author}
                    </li>
                  </ul>
                  <a href="#" className="fw-bold h5">
                    {entry.title}
                  </a>
                  <p className="text-muted font-size-15">{entry.content}</p>
                  <a href="#" className="text-primary font-weight-semibold">
                    Learn More <span className="ms-2 right-icon">&#8594;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button id="scroll-right" className="scroll-btn right-btn">
            &#9654;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Research;
