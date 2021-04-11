import React from "react";
import ErrorBoundaries from "../ErrorBoundaries";

const Unprotected = () => {
  return (
    <>
      <h1>Unprotected</h1>
      <hr />
      <ErrorBoundaries />
    </>
  );
};

export default Unprotected;
