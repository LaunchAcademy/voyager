import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';

const Icon = ({ icon, fixedWidth }) => (
  <FontAwesomeIcon icon={icon} fixedWidth={fixedWidth} width="18" />
);

Icon.defaultProps = {
  fixedWidth: false,
};

Icon.propTypes = {
  fixedWidth: PropTypes.bool,
};

export default Icon;
