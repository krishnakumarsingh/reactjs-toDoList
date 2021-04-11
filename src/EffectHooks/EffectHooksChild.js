import React, { useState, useEffect } from "react";

const EffectHooks = ({ taskList }) => {
  const [movies, setMovies] = useState(taskList);
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("Changed movies list!!");
  }, [movies]);
  return (
    <>
      <h1>Use Effect</h1>
      <h2>
        Total Movies Item: {num} / {movies.length}
      </h2>
      <button
        className="btn btn-outline-info"
        onClick={() => {
          if (num >= movies.length) return false;
          setNum(num + 1);
        }}
      >
        Click and increase the count {num}{" "}
      </button>
      <hr />
    </>
  );
};

export default EffectHooks;
