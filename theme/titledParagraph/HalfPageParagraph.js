import React from "react";
import PropTypes from "prop-types";
import "./halfPageParagraph.css";

const HalfTitledParagraph = ({ title, children }) => (
  <section className="half-page-paragraph">
    <div className="half-page-paragraph__subtitle">Launch Your Career</div>
    <div className="half-page-paragraph__title">{title}</div>
    {children}
  </section>
);

HalfTitledParagraph.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HalfTitledParagraph;
