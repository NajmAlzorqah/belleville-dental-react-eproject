import React, { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal"; // Import your AppointmentModal component
import "./Home.css"; // Import your CSS file for styling
import pic from "../../assets/female-orthodontist-with-latex-gloves-handling-dental-equipment2.jpg"
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="home-page" className="home-page">
      <div className="shades"></div>
      <div className="page-saperatopr"></div>
      <div className="background-image">
        <img
          src={pic}
          alt="background-image"
        />
      </div>
      <div className="home-page-componants">
        <div className="main-text delay hidden">
          <h1>
            Excellent Techniques <span>For Healthy Dental Condition</span>
          </h1>
        </div>
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
      <div className="model" id="model">
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
        <div className="model-body">
          <h3>Have You Visited Us Before?</h3>
          <div className="ratio-option">
            <div>
              <input className="yes" type="radio" /> Yes
            </div>
            <div>
              <input className="no" type="radio" /> No
            </div>
          </div>
          <h3>Name&#42;</h3>
          <div className="form-name">
            <div className="first-name">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="last-name">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <h3>Email Address&#42;</h3>
          <input type="email" placeholder="Email Address" />
          <h3>Phone Number&#42;</h3>
          <input type="text" placeholder="Phone Number" />
          <h3>Preferred Appointment Day</h3>
          <input type="datetime-local" placeholder="No Preference" />
          <h3>Preferred Appointment Time</h3>
          <input type="datetime-local" placeholder="No Preference" />
          <div className="submit-button">
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="scheduals">
        <div className="grid-box">
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
      {isModalOpen && <div id="overlay" className="active"></div>}
      {isModalOpen && <AppointmentModal closeModal={closeModal} />}
    </section>
  );
};

export default Home;
