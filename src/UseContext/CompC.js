import React, { useContext } from "react";
import { data } from "./CompA";

const CompC = () => {
  const context = useContext(data);
  return (
    <>
      <h1>
        Comp C ={">"} Name: {context}
      </h1>
      <hr />
    </>
  );
};

export default CompC;
