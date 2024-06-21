// src/hooks/useScrollAnimation.js
import { useEffect } from "react";

const useScrollAnimation = (selector, showClass) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(showClass);
          } else {
            entry.target.classList.remove(showClass);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, showClass]);
};

export default useScrollAnimation;
