import React from "react";

const Fact = ({ value, label }) => (
  <div className="fact-set__fact">
    <strong className="fact-set__fact-value">{value}</strong> {label}
  </div>
);

export default Fact;
