import React from "react";

function CurrencyComa(val, symbol) {
  return (
    <span>
      <span style={{ color: "#50aa97e6" }}>{symbol}</span>{" "}
      {val.toLocaleString().split(".")[0]}.{val.toFixed(2).split(".")[1]}
    </span>
  );
}

export default CurrencyComa;
/* 
function CurrencyComa(val, symbol) {
  return `<span className="symbol">${symbol}</span> ${
    val.toLocaleString().split(".")[0]
  }.${val.toFixed(2).split(".")[1]}`;
}

export default CurrencyComa;
 */
