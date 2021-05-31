import React from "react";
import CodePen from "./CodePen";

export default function SortStingAndCount() {
  const xyz = (x) => {
    var y = x.split("").sort();
    var z = [];
    var cc = 1;
    for (var i = 0; i < y.length; i++) {
      if (y[i] !== y[i + 1]) z.push({ [y[i]]: cc });
      if (y[i] === y[i + 1]) cc += 1;
      else cc = 1;
    }
    return z;
  };
  const mapped = xyz("abhbqb").map(
    (i, j) =>
      `{${Object.keys(i)}: ${i[Object.keys(i)]}}${
        j === xyz("abhbqb").length - 1 ? "" : ","
      }`
  );
  return (
    <div>
      <h1>Sort sting and count</h1>
      <p>Find out string chrachter and counting of that chrachter.</p>
      <CodePen>
        Sting = 'abhbqb'
        <br />[{mapped.map((i) => i)}]
      </CodePen>

      <noscript>{console.log("hello")}</noscript>
    </div>
  );
}
