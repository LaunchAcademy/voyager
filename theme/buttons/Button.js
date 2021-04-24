import React from "react";
import PropTypes from "prop-types";

import "./buttons.css";

const Button = ({
  text, to, size, secondary, placement,
}) => {
  const modifiers = [];
  if (secondary) {
    modifiers.push("button_secondary");
  }
  if (placement === "callout") {
    modifiers.push("callout__button");
  } else if (placement === "photo") {
    modifiers.push("callout-photo__button");
  }

  if (to) {
    return <a className={`button button_size_${size} ${modifiers.join(" ")}`} href={to}>{text}</a>;
  }
  return null;
};

Button.defaultProps = {
  to: undefined,
  size: "md",
  secondary: false,
  placement: undefined,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  size: PropTypes.oneOf(["xl", "lg", "md", "sm"]),
  secondary: PropTypes.bool,
  placement: PropTypes.oneOf(["callout", "photo", undefined]),
};

export default Button;
