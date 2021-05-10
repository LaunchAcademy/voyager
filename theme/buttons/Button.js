import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconMap from "../icons/getIconMap.js";

import "./buttons.css";

const Button = ({
  text, to, size, secondary, placement, iconName, className, hideText,
}) => {
  const modifiers = [];
  if (secondary) {
    modifiers.push("button_secondary");
  }
  if (placement === "banner") {
    modifiers.push("banner__button");
  } else if (placement === "photo") {
    modifiers.push("banner-photo__button");
  }

  let icon;
  if (iconName) {
    const iconMap = getIconMap();
    icon = <FontAwesomeIcon icon={iconMap[iconName]} />;
  }

  if (hideText) {
    modifiers.push("button_text-hidden");
  }

  if (to) {
    return <a className={`button button_size_${size} ${modifiers.join(" ")} ${className || ""}`} href={to}>{hideText ? null : text}{icon}</a>;
  }
  return null;
};

Button.defaultProps = {
  text: undefined,
  iconName: undefined,
  to: undefined,
  size: "md",
  secondary: false,
  placement: undefined,
  className: undefined,
  hideText: false,
};

Button.propTypes = {
  text: PropTypes.string,
  iconName: PropTypes.oneOf(PropTypes.oneOf(getIconMap())),
  to: PropTypes.string,
  size: PropTypes.oneOf(["xl", "lg", "md", "sm"]),
  secondary: PropTypes.bool,
  placement: PropTypes.oneOf(["callout", "photo", undefined]),
  className: PropTypes.string,
  hideText: PropTypes.bool,
};

export default Button;
