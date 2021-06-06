import React from "react";

function CodePen(props) {
  var styleClass = props.output && "code--output";
  return <code className={styleClass}>{props.children}</code>;
}

export default CodePen;
