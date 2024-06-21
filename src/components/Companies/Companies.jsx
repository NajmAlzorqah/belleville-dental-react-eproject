import React, { useEffect } from "react";
import company1 from "/assets/company-1.png";
import company2 from "/assets/company-2.png";
import company3 from "/assets/company-3.png";
import company4 from "/assets/company-4.png";
import company5 from "/assets/company-5.png";
import company6 from "/assets/company-6.png";
import company7 from "/assets/company-7.png";
import company8 from "/assets/company-8.png";
import "./Companies.css"; // Import your CSS file for styling

const Companies = () => {
  useEffect(() => {
    // Infinite scroll animation logic here (simulate with useEffect)
    addAnimation();

    function addAnimation() {
      const scrollerInner = document.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate each item in the scroller content
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []); // Run once on component mount

  return (
    <section className="companies">
      <div data-animated="true" className="scroller">
        <ul className="tag-list scroller__inner">
          <li>
            <img src={company1} alt="logo" />
          </li>
          <li>
            <img src={company7} alt="logo" />
          </li>
          <li>
            <img src={company2} alt="logo" />
          </li>
          <li>
            <img src={company8} alt="logo" />
          </li>
          <li>
            <img src={company4} alt="logo" />
          </li>
          <li>
            <img src={company5} alt="logo" />
          </li>
          <li>
            <img src={company6} alt="logo" />
          </li>
          <li>
            <img src={company3} alt="logo" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Companies;
