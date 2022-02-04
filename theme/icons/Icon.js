import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';

const Icon = ({ icon, fixedWidth = false }) => (
  <FontAwesomeIcon icon={icon} fixedWidth={fixedWidth} width="18" />
);

export default Icon;
