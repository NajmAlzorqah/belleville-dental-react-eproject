import React from "react";

const AppointmentModal = ({ closeModal }) => {
  return (
    <div className="model active" id="model">
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
        <div className="submit-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
