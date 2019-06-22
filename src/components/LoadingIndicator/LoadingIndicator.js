import React from "react";
import "./LoadingIndicator.css";

function LoadingIndicator() {
  return (
    <div className="loading-container main-container">
      <i className="fas fa-palette fa-spin" /> <p className="text">Loading...</p>
    </div>
  );
}

export default LoadingIndicator;
