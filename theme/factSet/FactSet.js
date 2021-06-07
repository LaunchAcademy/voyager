import React from "react";
import PropTypes from "prop-types";
import "./factSet.css";

const FactSet = ({ children }) => <div className="fact-set">{children}</div>;

FactSet.propTypes = {
  children: PropTypes.oneOf(PropTypes.node, PropTypes.arrayOf(PropTypes.node)).isRequired,
};

export default FactSet;
