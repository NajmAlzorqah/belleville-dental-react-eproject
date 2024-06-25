/*
  Component Overview:
  The `AppointmentModal` component renders a modal for requesting an appointment,
  providing inputs for visitor information such as name, email, phone number, and preferred appointment details.

  Dependencies:
  - React: Used for building user interfaces.

  Props:
  - closeModal: Function passed as a prop to close the modal when the close button is clicked.

  Note:
  - This component renders a modal with interactive form elements to facilitate appointment requests.
  - `closeModal` function is invoked when the close button is clicked to dismiss the modal.

  Usage:
  - Used within a parent component or as a standalone modal component for handling appointment requests.
*/
import React, { useEffect, useRef } from "react";

const AppointmentModal = ({ closeModal }) => {
  const modalRef = useRef();

  // Function to handle clicks outside the modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  // Add event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="model active" id="model" ref={modalRef}>
      <div className="model-header">
        <h2>Request Appointment</h2>
        <button data-close-button className="close-button" onClick={closeModal}>
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
        <div className="buttons-two">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
