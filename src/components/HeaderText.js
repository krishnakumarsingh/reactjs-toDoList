import React from "react";

const HeaderText = ({ className, text }) => {
  return <h1 className={`text-primary ${className}`}>{text}</h1>;
};

export default HeaderText;
