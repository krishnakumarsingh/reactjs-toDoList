import React from "react";
import CodePen from "./CodePen";

export default function VariablesName() {
  const xyz = (x) => {
    var y = x.split("");
    var z = [];
    var temp = 0;
    for (let item in y) {
      if (y[item] === "_") {
        z.push(item);
      }
    }
    for (let item of z) {
      y.splice(item - temp + 1, 1, y[item - temp + 1].toUpperCase());
      y.splice(item - temp, 1);
      temp++;
    }
    return y.join("");
  };
  var varNameConvert = xyz("modify_variable_name");

  return (
    <div>
      <h1>Modify variable name</h1>
      <CodePen>
        Convert modify_variable_name ={">"} {varNameConvert}
      </CodePen>
    </div>
  );
}
