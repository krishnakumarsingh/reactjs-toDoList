import React from "react";
import HeaderText from "../components/HeaderText";
import BlogComponent from "./BlogComponent";
import BlogComponentWithName from "./BlogComponentWithName";

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
      <code>const NewComponent = higherOrderComponent(originalComponent);</code>
      <br />
      <code>
        const EnhancedComponent = higherOrderComponent(originalComponent);
      </code>
      <br />
      <br />
      <code>const IronMan = withSuit(TonyStark);</code>
      <br />
      <br />
    </>
  );
}

export default HOCComp;
