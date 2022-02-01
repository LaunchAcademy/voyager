import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import getIconMap from "./getIconMap.js";

const iconMap = getIconMap();
const Icon = ({ name, fixedWidth }) => (
  <FontAwesomeIcon icon={iconMap[name]} fixedWidth={fixedWidth} width="18" />
);

Icon.defaultProps = {
  fixedWidth: false,
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
  fixedWidth: PropTypes.bool,
};

export default Icon;
