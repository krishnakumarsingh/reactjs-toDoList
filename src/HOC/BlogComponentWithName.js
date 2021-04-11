import React from "react";
import HOC from "./HOCComp";

const BlogComponentWithName = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

export default HOC(BlogComponentWithName);
