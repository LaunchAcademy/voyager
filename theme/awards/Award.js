import React from "react";
import "./award.css";

const Award = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} />;
};

export default Award;
