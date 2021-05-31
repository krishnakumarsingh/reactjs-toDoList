import React from "react";
import ParentComp from "./ParentComp";
import CodePen from "../components/CodePen";

const PureComp = () => {
  return (
    <>
      <h1>Pure Component</h1>
      <p>
        Pure component not updated till any changes happen in their props and
        state, if it same then it not call. But with normal component it call
        every time.
      </p>
      <CodePen>
        Example: <br />
        Old state ={">"} name = 'Krishna'
      </CodePen>
      <br />
      <CodePen>New state ={">"} name = 'Krishna'</CodePen>
      <br />
      <CodePen>Normal component update every time</CodePen>
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
