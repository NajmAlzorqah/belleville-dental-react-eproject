/*
  Component Overview:
  The `FooterSection` component represents the footer section of a website,
  designed to provide essential navigation links, site information, and dynamic content such as a ticker displaying date, time, and location.
*/

import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "/assets/light-logo-icon.png";

const FooterSection = () => {
  const [tickerContent, setTickerContent] = useState("");

  /*
    Smooth Scroll Function:
    - Function: `smoothScroll`
    - Description: Handles smooth scrolling to target elements when footer links are clicked.
    - Usage: Applied to footer links to navigate users to specific sections on the page.
    - Implementation: Uses `event.preventDefault()` to prevent default link behavior and calculates scroll position to achieve smooth scrolling effect.
  */
  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 70;

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  /*
    Ticker Update Functionality:
    - Function: `updateTicker`
    - Description: Fetches current date, time, and location information to update the ticker content.
    - Usage: Updates ticker content with real-time data fetched from OpenStreetMap reverse geolocation API.
    - Implementation: Uses `navigator.geolocation.getCurrentPosition` to obtain user's current location and fetches corresponding city information. Handles fallback scenarios gracefully.
  */
  const updateTicker = () => {
    const now = new Date();
    const year = now.getFullYear();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const geolocationAPI = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

        fetch(geolocationAPI)
          .then((response) => response.json())
          .then((data) => {
            const city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              "Unknown Location";
            setTickerContent(` ${year} | ${time} | ${city}`);
          })
          .catch(() => {
            setTickerContent(` ${year} | ${time} | Location: Unknown`);
          });
      },
      () => {
        setTickerContent(` ${year} | ${time} | Location: Unknown`);
      }
    );
  };

  /*
    Lifecycle Management:
    - Event Listener Setup and Cleanup:
      - Hooks Used: `useEffect`
      - Description: Sets up event listeners for smooth scrolling on component mount (`useEffect` with empty dependency array).
      - Cleanup: Removes event listeners on component unmount to prevent memory leaks and ensure clean component lifecycle.
    - Interval-Based Ticker Update:
      - Hooks Used: `useEffect`
      - Description: Initializes and updates ticker content at regular intervals (`useEffect` with empty dependency array).
      - Cleanup: Clears the interval on component unmount to stop periodic updates.
  */
  useEffect(() => {
    const footerLinks = document.querySelectorAll(".footer-link");
    footerLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      footerLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  useEffect(() => {
    const tickerInterval = setInterval(updateTicker, 60000);
    updateTicker();

    return () => {
      clearInterval(tickerInterval);
    };
  }, []);

  /*
    Component Structure:
    - HTML Structure:
      - Sections: Divided into `footer` and `footer-alt` sections for content and ticker respectively.
      - Grid Layout: Organized using Bootstrap grid (`row` and `col-*` classes) for responsive design.
    - Logo and Branding:
      - Logo: Includes Belleville Dental logo (`light-logo-icon.png`) with alternative text for accessibility.
      - Brand Description: Provides a brief description of Belleville Dental's services and mission.
    - Navigation Links:
      - Site Map: Lists primary navigation links (`Home`, `About Us`, `Products`, etc.) for easy access to different sections of the website.
      - Query Links: Includes links to FAQs and Contact Us sections for user queries.
      - Media Library: Displays links to latest research and media library resources.
    - Ticker Display:
      - Dynamic Content: Displays real-time information (`year`, `time`, `city`) fetched through `updateTicker` function.
      - Styling: Styled using CSS (`Footer.css`) for visual consistency and readability.
  */

  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-5 logo">
                <img src={logo} alt="Belleville Dental Logo" height="70" />
                <p>
                  <span>Belleville</span>Dental
                </p>
                <p className="text-black-100 my-4 font-size-15">
                  Providing comprehensive dental care information to enhance
                  oral health and well-being.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <h6 className="text-black fw-bold text-uppercase mb-3">
                Site Map
              </h6>
              <ul className="list-unstyled footer-sub-menu">
                <li>
                  <a href="#Home" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="footer-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#professional" className="footer-link">
                    Professional Education
                  </a>
                </li>
                <li>
                  <a href="#patient-education" className="footer-link">
                    Patient Education
                  </a>
                </li>
                <li>
                  <a href="#blog" className="footer-link">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="text-black fw-bold text-uppercase mb-3">
                Queries
              </h6>
              <ul className="list-unstyled footer-sub-menu">
                <li>
                  <a href="#" className="footer-link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              <h6 className="text-black fw-bold text-uppercase mb-3">
                Media Library
              </h6>
              <ul className="list-unstyled footer-sub-menu">
                <li>
                  <a href="#Research" className="footer-link">
                    Latest Research
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Media Library
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-alt py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ticker">
                <div id="ticker">
                  <div id="ticker-content">{tickerContent}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
