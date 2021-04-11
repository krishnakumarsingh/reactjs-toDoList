import React from "react";
import HOC from "./HOCComp";

const BlogComponent = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

export default HOC(BlogComponent);
