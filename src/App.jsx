import React from "react";
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
  return (
    <>
      <Loader />
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
  );
};

export default App;
