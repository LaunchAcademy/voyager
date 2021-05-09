import React from "react";
import PropTypes from "prop-types";

const Fact = ({ value, label }) => (
  <div className="fact-set__fact">
    <strong className="fact-set__fact-value">{value}</strong> {label}
  </div>
);

Fact.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Fact;
