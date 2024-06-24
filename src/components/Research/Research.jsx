import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import "./Research.css";

// Import images
import img1 from "/assets/research-1.jpg";
import img2 from "/assets/research-2.jpg";
import img3 from "/assets/research-3.jpeg";
import img4 from "/assets/research-4.jpg";
import img5 from "/assets/research-5.jpg";
import img6 from "/assets/research-6.jpg";
import img7 from "/assets/research-7.jpg";
import img8 from "/assets/research-8.jpg";
// import img4 from "/assets/research-1.jpg";

const Research = () => {
  const [ResearchEntries, setResearchEntries] = useState([]);

  useEffect(() => {
    // Fetch Research entries from your data source here
    setResearchEntries([
      {
        id: 1,
        image: img1,
        date: "April 10 2023",
        author: "Research Team",
        title: "New Advances in Dental Implants",
        content:
          "Learn about the latest techniques and materials used in dental implants to enhance durability and aesthetics.",
      },
      {
        id: 2,
        image: img2,
        date: "April 11 2023",
        author: "Research Team",
        title: "Impact of Diet on Oral Health",
        content:
          "Discover how dietary choices affect tooth decay and gum disease, and learn tips for maintaining a healthy diet.",
      },
      {
        id: 3,
        image: img3,
        date: "April 12 2023",
        author: "Research Team",
        title: "Innovations in Cavity Prevention",
        content:
          "Explore new techniques and products aimed at preventing cavities and maintaining strong enamel.",
      },
      {
        id: 4,
        image: img4,
        date: "April 13 2023",
        author: "Research Team",
        title: "Advanced Dental Materials",
        content:
          "A follow-up call will be scheduled shortly to provide a comprehensive discussion on the lates advancement.",
      },
      {
        id: 5,
        image: img5,
        date: "April 14 2023",
        author: "Research Team",
        title: "Technological Advancements",
        content:
          "To ensure a through understanding of the latest technological advancements and innovations.",
      },
      {
        id: 6,
        image: img6,
        date: "April 15 2023",
        author: "Research Team",
        title: "Preventive Techniques",
        content:
          "An upcoming call will be scheduled soon to discuss the newest preventive techniques in depth.",
      },
      {
        id: 7,
        image: img7,
        date: "April 16 2023",
        author: "Research Team",
        title: "Behavioral Approaches",
        content:
          "PLanes are in place for a detailed exploration of current behavioral approaches of this field.",
      },
      {
        id: 8,
        image: img8,
        date: "April 17 2023",
        author: "Research Team",
        title: "Natural Remedies",
        content:
          "Aiming for a comprehensive exploration and understanding of those natural remedies.",
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
                Research
              </h3>
              <p className="text-muted font-size-15">
                Explore the latest findings and advancements in oral health research to
                maintain a healthy smile.
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
