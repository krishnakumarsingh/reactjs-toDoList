import React from "react";
import taskList from "../taskList";
import Header from "./Header";
import EffectHooks from "../EffectHooks/EffectHooks";
import PropsDrilling from "./PropsDrilling";
import StrictModeApp from "../StrictMode";

const Home = () => {
  const user = {
    user: {
      firstName: "Joe West",
    },
  };
  return (
    <>
      <h1>Home</h1>

      <EffectHooks taskList={taskList} />
      <Header header={"To list"} />
      <hr />
      <PropsDrilling user={user} />
      <StrictModeApp taskList={taskList} />
    </>
  );
};

export default Home;
