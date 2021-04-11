import React, { useState, useEffect } from "react";

const EffectHooks = () => {
  const [movies, setMovies] = useState(10);
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("Changed movies list!!", movies);
  }, [movies]);
  return (
    <>
      <h1>Use Effect</h1>
      <h2>
        Total Movies Item: {num} / {movies}
      </h2>
      <button
        className="btn btn-outline-info"
        onClick={() => {
          if (num >= movies) return false;
          setNum(num + 1);
        }}
      >
        Click and increase the count {num}{" "}
      </button>
      <button
        className="btn btn-outline-info"
        onClick={() => {
          setMovies(movies + 10);
        }}
      >
        Click and increase the count {movies}{" "}
      </button>
      <hr />
    </>
  );
};

export default EffectHooks;
