import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIconMap from "./getIconMap";

const iconMap = getIconMap();
const Icon = ({ name }) => (

  <FontAwesomeIcon icon={iconMap[name]} />
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
};

export default Icon;
