import React from "react";
import ParentComp from "./ParentComp";

const PureComp = () => {
  return (
    <>
      <h1>Pure Component</h1>
      <p>
        Pure component not updated till any changes happen in their props and
        state, if it same then it not call. But with normal component it call
        every time.
      </p>
      <code>
        Example: <br />
        Old state ={">"} name = 'Krishna'
      </code>
      <br />
      <code>New state ={">"} name = 'Krishna'</code>
      <br />
      <code>Normal component update every time</code>
      <br />
      <p>
        Pure component never update with same value it check every time deep
        copy
      </p>
      <br />
      <ParentComp />
    </>
  );
};
export default PureComp;
