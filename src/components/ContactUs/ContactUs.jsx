/*
  Component Overview:
  The `ContactUs` component displays a contact form and contact details section,
  allowing users to submit messages and view contact information.

  Dependencies:
  - React: Used for building user interfaces.

  Functionality:
  - `useState` hook manages form data (`formData`), error message (`errorMsg`), and success message (`successMsg`).
  - `handleInputChange` function updates `formData` state on input change.
  - `handleSubmit` function validates form fields, sends a POST request to a server-side endpoint (`php/contact.php`), and handles response.

  Note:
  - This component integrates with a server-side endpoint (`php/contact.php`) for form submission.
  - Ensure CSS styles in `ContactUs.css` are applied for desired layout and styling effects.

  Usage:
  - Used within a parent component or as a standalone section for contacting customer support or service.
*/

import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!formData.name.trim()) {
      setErrorMsg("* Please enter a Name");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg("* Please enter an Email");
      return;
    }
    if (!formData.comments.trim()) {
      setErrorMsg("* Please enter Comments");
      return;
    }

    // Clear previous messages
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // Perform API call or form submission
      const response = await fetch("php/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${formData.name}&email=${formData.email}&comments=${formData.comments}`,
      });

      // Handle response
      if (response.ok) {
        const data = await response.text();
        setSuccessMsg(data); // Assuming the server returns a success message
        setFormData({ name: "", email: "", comments: "" }); // Clear form fields on success
      } else {
        setErrorMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h3 className="title mb-3">
                Contact Us
              </h3>
              <p className="text-muted font-size-15">
                Contact us today to discover how our innovative solutions can enhance your dental health and transform your smile!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7 align-self-center">
            <div className="custom-form mb-5 mb-lg-0">
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <p id="error-msg" className="alert alert-warning">
                    {errorMsg}
                  </p>
                )}
                {successMsg && (
                  <div id="simple-msg" className="alert alert-success">
                    {successMsg}
                  </div>
                )}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Your name..."
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Your email..."
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="comments">Message*</label>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control"
                        placeholder="Your message..."
                        value={formData.comments}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-primary"
                    >
                      Send Message{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="contact-detail text-muted ms-lg-5">
              <p className="">
                <i className="icon-xs icon me-1" data-feather="mail"></i> :{" "}
                <span>&#9993; support@website.com</span>
              </p>
              <p className="">
                <i className="icon-xs icon me-1" data-feather="link"></i> :{" "}
                <span>&#128279; www.website.com</span>
              </p>
              <p className="">
                <i className="icon-xs icon me-1" data-feather="phone-call"></i>{" "}
                : <span>&#128222; (+001) 123 456 7890</span>
              </p>
              <p className="">
                <i className="icon-xs icon me-1" data-feather="clock"></i> :{" "}
                <span>&#9200; 9:00 AM - 6:00 PM</span>
              </p>
              <p className="">
                <i className="icon-xs icon me-1" data-feather="map-pin"></i> :{" "}
                <span>&#128204; 1644 Deer Ridge Drive, NJ 07662</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
