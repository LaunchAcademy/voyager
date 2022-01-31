import React from "react";
import PropTypes from "prop-types";
import Icon from "../icons/Icon.js";
import "./faq.css";

const Faq = ({ title, description, selected, handleClick }) => {
  let button;
  let questionClass;
  if (selected) {
    questionClass = "block";
    button = <Icon name="minus-square" onClick={handleClick} />
  } else {
    questionClass = "hidden";
    button = <Icon name="plus-square" onClick={handleClick} />;
  }
  return (
    <div className="faq" onClick={handleClick}>
      <div className="faq__content">
        <div className="faq__title-container">{title}</div>
        <div className="faq__icon-container"><button type="button">{button}</button></div>
      </div>
      <p className={`faq__description ${questionClass}`}>{description}</p>
    </div>
  );
};

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Faq;
