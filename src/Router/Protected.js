import React from "react";
import taskList from "../taskList";
import ToDoList from "../components/ToDoList";
import CompA from "../UseContext/CompA";
import HOCComp from "../HOC";
import PureComp from "../PureComponent";
import Table from "../components/Table";
import VariablesName from "../components/VariablesName";
import SortStingAndCount from "../components/SortStingAndCount";

const Protected = () => {
  return (
    <>
      <h1>Protected</h1>
      <hr />
      <ToDoList taskList={taskList} />
      <hr />
      <CompA />
      <HOCComp />
      <PureComp />
      <hr />
      <Table />
      <hr />
      <VariablesName />
      <hr />
      <SortStingAndCount />
    </>
  );
};

export default Protected;
