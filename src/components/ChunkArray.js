import React from "react";

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
      <code>var array = [1, 2, 3, 4, 5, 6, 7, 8];</code>
      <br />
      <code>var chunk = 2;</code>
      <br />
      {/* <code><pre>const chunkFn = function (arr, chunk) "{"</pre></code>
    {/* "var arrTemp = [];"
    for (var i = 0; i < arr.length; i += chunk) "{"
      "let tempArr;"
      "tempArr = arr.slice(i, i + chunk);"
      "arrTemp.push(tempArr);"
    "}"
    <pre>return arrTemp;</pre>
  "};"</code> */}
      <code>chunkFn(array, chunk);</code>
      <br />
      <code>
        <pre>
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
        </pre>
      </code>
    </div>
  );
}

export default ChunkArray;
