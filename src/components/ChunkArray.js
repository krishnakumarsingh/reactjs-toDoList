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
      <CodePen>
        var array = [1, 2, 3, 4, 5, 6, 7, 8];
        <br />
        var chunk = 2;
        <br />
        const chunkFn = function (arr, chunk) &#123;
        <br />
        &nbsp;&nbsp;var arrTemp = [];
        <br />
        &nbsp;&nbsp;for (var i = 0; i &#60; arr.length; i += chunk) &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;let tempArr;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;tempArr = arr.slice(i, i + chunk);
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;arrTemp.push(tempArr);
        <br />
        &nbsp;&nbsp;&#125;
        <br />
        &nbsp;&nbsp;return arrTemp;
        <br />
        &#125;;
        <br />
        chunkFn(array, chunk);
        <CodePen output={true}>
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
      </CodePen>
    </div>
  );
}

export default ChunkArray;
