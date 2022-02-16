import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Icon = ({ icon, fixedWidth = false, className = "" }) => (
  <FontAwesomeIcon icon={icon} className={`${className}`} fixedWidth={fixedWidth} width="18" />
);

export default Icon;
