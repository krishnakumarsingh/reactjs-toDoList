import React from "react";

export default function StrictMode({ taskList }) {
  return (
    <>
      <h1>Hello StrictMode</h1>
      <p>
        If you see in console there are mation all relative error of this
        component, Which is wraping in side{" "}
        <p>
          StrictMode is a tool for highlighting potential problems in an
          application. Like Fragment, StrictMode does not render any visible UI.
          It activates additional checks and warnings for its descendants.
        </p>
        <i>
          <b>strictMode</b>
        </i>
      </p>
      <ul>
        {taskList.map((item, index) => (
          <li key={index + item}>{item.task}</li>
        ))}
      </ul>
      <hr />
    </>
  );
}
