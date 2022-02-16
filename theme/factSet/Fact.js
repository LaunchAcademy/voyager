import React from "react";

const Fact = ({ value, label, className = "" }) => (
  <div className={`fact-set__fact ${className}`}>
    <strong className="fact-set__fact-value">{value}</strong> {label}
  </div>
);

export default Fact;
