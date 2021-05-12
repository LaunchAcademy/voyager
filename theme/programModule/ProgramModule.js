import React from "react";
import PropTypes from "prop-types";
import "./programModule.css";

const ProgramModule = ({ subtitle, title, location, commitment, duration, description, imageUrl, children }) => (
  <div className="programModule">
    <div className="programModule__image-column">
      <div className="programModule__image-container">
        <img src={imageUrl} alt="programModule Image" />
      </div>
    </div>
    <div className="programModule__supporting-content">
      <h2 className="programModule__subtitle">{subtitle}</h2>
      <h1 className="programModule__title">{title}</h1>
      <div className="programModule__info-container">
        <p>{location} | {commitment} | {duration}</p>
      </div>
      <div className="programModule__description-container">
        <p>{description}</p>
      </div>
      <div className="programModule__objectives-container">
        {children}
      </div>
    </div>
  </div>
);

ProgramModule.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  commitment: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProgramModule;
