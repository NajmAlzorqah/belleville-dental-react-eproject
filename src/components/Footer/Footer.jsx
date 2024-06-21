import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../assets/light-logo-icon.png";

const FooterSection = () => {
  const [tickerContent, setTickerContent] = useState("");

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

  useEffect(() => {
    const tickerInterval = setInterval(updateTicker, 60000);
    updateTicker();

    return () => {
      clearInterval(tickerInterval);
    };
  }, []);

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
                  {/* <div id="ticker-content">{tickerContent}</div> */}
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
