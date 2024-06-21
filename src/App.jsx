import React, { useState, useEffect } from "react";
import {
  Loader,
  Navbar,
  Home,
  AboutUs,
  Companies,
  PatientEducation,
  ProfessionalEducation,
  Products,
  Gallery,
  Research,
  ContactUs,
  Footer,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to mark all components as loaded
  const markAllComponentsLoaded = () => {
    setIsLoading(false); // Hide loader when all components are loaded
  };

  // Effect to hide loader when all components are loaded
  useEffect(() => {
    // Simulating component loading completion
    const timeout = setTimeout(() => {
      markAllComponentsLoaded();
    }, 2000); // Simulated async operation time

    // Cleanup function to clear timeout (optional)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <AboutUs />
          <Companies />
          <PatientEducation />
          <ProfessionalEducation />
          <Products />
          <Gallery />
          <Research />
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
