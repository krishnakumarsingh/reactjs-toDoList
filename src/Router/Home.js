import React from "react";
import taskList from "../taskList";
import Header from "../components/Header";
import EffectHooks from "../EffectHooks/EffectHooks";
import PropsDrilling from "../components/PropsDrilling";
import StrictModeApp from "../StrictMode";
import LazyLoad from "../LazyLoad/LazyLoad";

const Home = () => {
  const user = {
    user: {
      firstName: "Joe West",
    },
  };
  return (
    <>
      <h1>Home</h1>
      {user.user.firstName}
      <LazyLoad />
      <EffectHooks taskList={taskList} />
      <Header header={"To list"} />
      <hr />
      <PropsDrilling user={user} />
      <StrictModeApp taskList={taskList} />
    </>
  );
};

export default Home;
