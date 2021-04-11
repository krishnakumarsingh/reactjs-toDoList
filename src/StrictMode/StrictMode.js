import React from "react";

export default function StrictMode({ taskList }) {
  return (
    <>
      <h1>Hello StrictMode</h1>
      <p>
        If you see in console there are mation all relative error of this
        component, Which is wraping in side{" "}
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
