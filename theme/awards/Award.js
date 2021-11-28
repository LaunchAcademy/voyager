import React from "react";
import "./award.css";

const Award = ({ imageProps, altText }) => {
  console.log(imageProps)
  return <img {...imageProps} alt={altText} />;
};

export default Award;
