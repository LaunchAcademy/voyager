import React from "react";
import PropTypes from "prop-types";
import "./featureList.css";

const FeatureList = ({ subtitle, title, footerText, children }) => (
  <div className="feature-list">
    <div className="feature-list__header-container">
      <h2 className="feature-list__header-container-title">{title}</h2>
      <h3 className="feature-list__header-container-subtitle">{subtitle}</h3>
    </div>
    <div className="feature-list__grid">
      {children}
    </div>
    <div className="feature-list__footer-container">
      <h2 className="feature-list__footer-text">{footerText}</h2>
    </div>
  </div>
);

module.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default FeatureList;
