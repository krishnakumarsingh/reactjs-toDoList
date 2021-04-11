import React, { createContext } from "react";
import CompB from "./CompB";
import HeaderText from "../components/HeaderText";

const data = createContext();
const CompA = () => {
  const name = "Krishna Kumar";
  return (
    <data.Provider value={name}>
      <HeaderText text="Props drling avoid by use Context" />
      <p>
        Props driling is nothing, using props send into child to child props
        sending, If we don't required those props inside that components so we
        can avoid props driling. It can be avoid by using <b>'UseContext'</b>.
      </p>
      <h2>
        Comp A ={">"} Name: {name}
      </h2>
      <CompB />
      <p>
        If you see name <b>'props'</b> not in use inside CompB so we do required
        to send props to every child components, we directly use that props use
        in CompC by using <b>'UseContext'</b>.
      </p>
    </data.Provider>
  );
};

export default CompA;
export { data };
