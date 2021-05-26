import React from "react";
import PropTypes from "prop-types";

const CreativeContent = ({ children }) => (
  <div className="creative-content__container">
    {children}
  </div>
);

CreativeContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CreativeContent;