import React from "react";
import HeaderText from "../components/HeaderText";
import BlogComponent from "./BlogComponent";
import BlogComponentWithName from "./BlogComponentWithName";
import CodePen from "../components/CodePen";

function HOCComp() {
  return (
    <>
      <HeaderText text="HOC Comp" />
      <BlogComponent />
      <BlogComponentWithName name="Krishna" />
      <p>
        A pattern where a function takes a component as an argument and returns
        a new component.
      </p>
      <CodePen>
        const NewComponent = higherOrderComponent(originalComponent);
      </CodePen>
      <br />
      <CodePen>
        const EnhancedComponent = higherOrderComponent(originalComponent);
      </CodePen>
      <br />
      <br />
      <CodePen>const IronMan = withSuit(TonyStark);</CodePen>
      <br />
      <br />
    </>
  );
}

export default HOCComp;
