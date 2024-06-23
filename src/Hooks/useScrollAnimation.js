import { useEffect } from "react";

/**
 * useScrollAnimation Custom Hook
 *
 * This hook applies a CSS class to elements when they come into view during scrolling,
 * and removes it when they exit the view.
 *
 * @param {string} selector - CSS selector for elements to observe
 * @param {string} showClass - CSS class to add when element is in view
 */
const useScrollAnimation = (selector, showClass) => {
  useEffect(() => {
    /**
     * Intersection Observer Callback
     *
     * Adds or removes the specified CSS class based on element visibility.
     * @param {IntersectionObserverEntry[]} entries - Array of observed elements
     */
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(showClass);
        } else {
          entry.target.classList.remove(showClass);
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1, // Adjust the threshold as needed
    });

    // Select all elements matching the provided selector
    const elements = document.querySelectorAll(selector);

    // Observe each selected element
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Clean up function to unobserve elements when component unmounts or selector/showClass changes
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, showClass]); // Dependencies array ensures re-run on selector or showClass change
};

export default useScrollAnimation;
