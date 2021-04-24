import React from "react";

const Button = ({ text, to }) => {
  if (to) {
    return <a className="button" href={to}>{text}</a>;
  }
  return null;
};

export default Button;
