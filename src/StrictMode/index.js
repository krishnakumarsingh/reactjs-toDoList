import React from "react";
import StrictMode from "./StrictMode";

export default function StrictModeApp({ taskList }) {
  return (
    <>
      {
        <React.StrictMode>
          <StrictMode taskList={taskList} />
        </React.StrictMode>
      }
      {/* <StrictMode taskList={taskList} /> */}
    </>
  );
}
