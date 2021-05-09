import React from "react";
import PropTypes from "prop-types";
import "./titledParagraph.css";

const TitledParagraph = ({ title, children }) => (
  <section className="titled-paragraph">
    <div className="titled-paragraph__container">
      <h3 className="titled-paragraph__title">{title}</h3>
      {children}
    </div>

  </section>
);

TitledParagraph.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TitledParagraph;
