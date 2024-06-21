import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js"; // Ensure you have the correct path and file extension
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Ensure that you are importing createRoot from react-dom
import { createRoot } from "react-dom";

// Use createRoot to render your React application
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
