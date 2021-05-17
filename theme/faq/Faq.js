import React from 'react';
import PropTypes from "prop-types";
import Icon from "../icons/Icon";
import "./faq.css";

const Faq = ({ title, description, selected, handleClick }) => {
  let button, questionClass;
  if (selected) {
    questionClass = 'block'
  } else {
    questionClass = 'hidden'
    button = (
      <Icon
        name="plus-square"
        onClick={handleClick}
        aria-hidden="true"
      />
    )
  }
  return (
    <div className="faq" onClick={handleClick}>
      <div className="faq__content">
        <div className="faq__title-container">
          {title}
        </div>
        <div className="faq__icon-container">
          {button}
        </div>
      </div>
      <p className={`faq__description ${questionClass}`}>{description}</p>
    </div>
  )
}

Faq.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Faq
