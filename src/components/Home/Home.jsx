import React, { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal"; // Import your AppointmentModal component
import "./Home.css"; // Import your CSS file for styling
import pic from "/assets/female-orthodontist-with-latex-gloves-handling-dental-equipment2.jpg";

/**
 * Home Component
 *
 * This component represents the main landing page of the dental clinic website.
 * It includes sections for main text, secondary text, buttons for appointment,
 * scheduling information, and a modal for appointment requests.
 */
const Home = () => {
  // State to manage the visibility of the appointment modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Function to open the appointment modal
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Function to close the appointment modal
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Renders the Home component with all its sections and functionality.
   */
  return (
    <section id="Home" className="home-page">
      {/* Shades and separators for styling */}
      <div className="shades"></div>
      <div className="page-saperatopr"></div>

      {/* Background image section */}
      <div className="background-image">
        <img src={pic} alt="background-image" />
      </div>

      {/* Main content components */}
      <div className="home-page-componants">
        {/* Main text section */}
        <div className="main-text delay hidden">
          <h1>
            Excellent Techniques <span>For Healthy Dental Condition</span>
          </h1>
        </div>

        {/* Secondary text section */}
        <div className="secondary-text delay hidden">
          <p>
            Experience the future of dental with our state-of-the-art facility.
            Our highly skilled team is dedicated to providing you and your
            family with the exceptional dental services you deserve. From
            routine check-ups to advanced restorative procedures, we are
            committed to helping you achieve and maintain a beautiful, healthy
            smile for life.
          </p>
        </div>

        {/* Buttons section */}
        <div className="buttons">
          <button
            className="delay hidden"
            onClick={openModal}
            data-model-target="#model"
          >
            Make an Appointment &rarr;
          </button>
        </div>
      </div>

      {/* Appointment modal section */}
      <div className="model" id="model">
        {/* Modal header with close button */}
        <div className="model-header">
          <h2>Request Appointment</h2>
          <button
            data-close-button
            className="close-button"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>

        {/* Modal body with appointment form */}
        <div className="model-body">
          {/* Radio buttons for previous visit */}
          <h3>Have You Visited Us Before?</h3>
          <div className="ratio-option">
            <div>
              <input className="yes" type="radio" /> Yes
            </div>
            <div>
              <input className="no" type="radio" /> No
            </div>
          </div>

          {/* Name input fields */}
          <h3>Name&#42;</h3>
          <div className="form-name">
            <div className="first-name">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="last-name">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          {/* Email and phone number inputs */}
          <h3>Email Address&#42;</h3>
          <input type="email" placeholder="Email Address" />
          <h3>Phone Number&#42;</h3>
          <input type="text" placeholder="Phone Number" />

          {/* Preferred appointment day and time */}
          <h3>Preferred Appointment Day</h3>
          <input type="datetime-local" placeholder="No Preference" />
          <h3>Preferred Appointment Time</h3>
          <input type="datetime-local" placeholder="No Preference" />

          {/* Submit button */}
          <div className="submit-button">
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* Schedule section */}
      <div className="scheduals">
        <div className="grid-box">
          {/* Individual days with appointment hours */}
          <div className="days delay hidden">
            <h5>
              <span>01.</span> Saturday
            </h5>
            <p>Appointment Only</p>
          </div>
          <div className="days delay hidden">
            <h5>
              <span>02.</span> Monday
            </h5>
            <p>11:00am - 6:00pm</p>
          </div>
          <div className="days delay hidden">
            <h5>
              <span>03.</span> Tuesday
            </h5>
            <p>9:00am - 4:00pm</p>
          </div>
          <div className="days delay hidden">
            <h5>
              <span>04.</span> Thursday
            </h5>
            <p>11:00am - 6:00pm</p>
          </div>
        </div>
      </div>

      {/* Overlay for modal */}
      {isModalOpen && <div id="overlay" className="active"></div>}

      {/* Rendering appointment modal */}
      {isModalOpen && <AppointmentModal closeModal={closeModal} />}
    </section>
  );
};

export default Home;
