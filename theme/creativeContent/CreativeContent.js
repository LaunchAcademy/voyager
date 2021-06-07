import React from "react";
import PropTypes from "prop-types";
import "./creativeContent.css";

import "./creativeContent.css";

const CreativeContent = ({ children }) => (
  <div className="creative-content__container">{children}</div>
);

CreativeContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CreativeContent;
