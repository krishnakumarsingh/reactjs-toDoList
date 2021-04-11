import React, { useContext } from "react";
import CompC from "./CompC";
import { data } from "./CompA";

const CompB = ({ name }) => {
  const context = useContext(data);
  return (
    <>
      <h1>
        Comp B ={">"} Name: {context}
      </h1>
      <CompC />
    </>
  );
};

export default CompB;
