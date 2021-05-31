import React from "react";
import CodePen from "./CodePen";

function ChunkArray() {
  const chunkFn = function (arr, chunk) {
    var arrTemp = [];
    for (var i = 0; i < arr.length; i += chunk) {
      let tempArr;
      tempArr = arr.slice(i, i + chunk);
      arrTemp.push(tempArr);
    }
    return arrTemp;
  };
  var array = [1, 2, 3, 4, 5, 6, 7, 8];
  var chunk = 2;
  chunkFn(array, chunk);
  return (
    <div>
      <h1>Chunk array</h1>
      <p>Find out new array which have chunk array of first.</p>
      <CodePen>var array = [1, 2, 3, 4, 5, 6, 7, 8];</CodePen>
      <br />
      <CodePen>var chunk = 2;</CodePen>
      <br />
      {/* <CodePen><pre>const chunkFn = function (arr, chunk) "{"</pre></CodePen>
    {/* "var arrTemp = [];"
    for (var i = 0; i < arr.length; i += chunk) "{"
      "let tempArr;"
      "tempArr = arr.slice(i, i + chunk);"
      "arrTemp.push(tempArr);"
    "}"
    <pre>return arrTemp;</pre>
  "};"</CodePen> */}
      <CodePen>chunkFn(array, chunk);</CodePen>
      <br />
      <CodePen>
        [
        {chunkFn(array, chunk).map((i) =>
          i.map(
            (i1, ind) =>
              (ind === 0 ? "{" : "") +
              i1 +
              (ind === 0 ? "," : "") +
              (ind === 1 ? "}" : "") +
              (ind === 1 ? "," : "")
          )
        )}
        ]
      </CodePen>
    </div>
  );
}

export default ChunkArray;
