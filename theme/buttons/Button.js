import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconMap from "../icons/getIconMap";

import "./buttons.css";

const Button = ({
  text, to, size, secondary, placement, iconName,
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

  let icon;
  if (iconName) {
    const iconMap = getIconMap();
    icon = <FontAwesomeIcon icon={iconMap[iconName]} />;
  }

  if (to) {
    return <a className={`button button_size_${size} ${modifiers.join(" ")}`} href={to}>{text}{icon}</a>;
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
};

Button.propTypes = {
  text: PropTypes.string,
  iconName: PropTypes.oneOf(PropTypes.oneOf(getIconMap())),
  to: PropTypes.string,
  size: PropTypes.oneOf(["xl", "lg", "md", "sm"]),
  secondary: PropTypes.bool,
  placement: PropTypes.oneOf(["callout", "photo", undefined]),
};

export default Button;
