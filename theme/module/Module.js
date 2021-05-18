import React from "react";
import PropTypes from "prop-types";
import "./module.css";

const Module = ({ subtitle, title, location, commitment, duration, description, imageUrl, children }) => (
  <div className="module">
    <div className="module__image-column">
      <div className="module__image-container">
        <img src={imageUrl} alt="module Image" />
      </div>
    </div>
    <div className="module__supporting-content">
      <h2 className="module__subtitle">{subtitle}</h2>
      <h1 className="module__title">{title}</h1>
      <div className="module__info-container">
        <p>{location} | {commitment} | {duration}</p>
      </div>
      <div className="module__description-container">
        <p>{description}</p>
      </div>
      <div className="module__objectives-container">
        {children}
      </div>
    </div>
  </div>
);

module.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  commitment: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Module;
