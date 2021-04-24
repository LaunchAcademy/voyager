import React from "react";
import PropTypes from "prop-types";

import "./buttons.css";

const Button = ({
  text, to, size, secondary,
}) => {
  if (to) {
    return <a className={`button button_size_${size} ${secondary ? "button_secondary" : ""}`} href={to}>{text}</a>;
  }
  return null;
};

Button.defaultProps = {
  to: undefined,
  size: "md",
  secondary: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  size: PropTypes.oneOf(["xl", "lg", "md", "sm"]),
  secondary: PropTypes.bool,
};

export default Button;
