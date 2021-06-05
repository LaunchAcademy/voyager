import React from "react";
import PropTypes from "prop-types";
import Button from "../buttons/Button.js";
import "./halfPageParagraph.css";

const HalfPageParagraph = ({ title, text, subtitle, iconName }) => (
  <section className="half-page-paragraph">
    <div className="half-page-paragraph__subtitle">Launch Your Career</div>
    <div className="half-page-paragraph__title">{title}</div>
    <div className="half-page-paragraph__text">{text}</div>
    <div className="half-page-paragraph__action-subtitle">{subtitle}</div>
    <div>
      <Button
        to="#"
        text="Apply Today"
        iconname={iconName}
        className="hero_button mt-10"
        size="lg"
      />
    </div>
  </section>
);

HalfPageParagraph.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  subtitle: PropTypes.string,
  iconName: PropTypes.string,
};

export default HalfPageParagraph;
