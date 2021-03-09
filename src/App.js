import React, { useState } from "react";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import taskList from "./taskList";

function App() {
  const [movies, setMovies] = useState(taskList);
  const [completeValue, setCompleteValue] = useState(false);
  const handelEvent = (id) => {
    let mapped = movies.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setMovies(mapped);
  };

  const handelAddEvent = (event, inputText) => {
    let mapped = [...movies];
    mapped.push({
      id: movies.length + 1,
      task: inputText,
      complete: false,
    });
    setMovies(mapped);
  };

  const listsSelected = (complete) => {
    return movies.filter((task) => {
      return task.complete === complete;
    });
  };
  const handelCompleteValue = () => {
    setCompleteValue(!completeValue);
  };
  // const completeValue = true;
  return (
    <div className="create-list">
      <Header header={"To list"} />
      <hr />
      <List
        listHeadLine={`${completeValue ? "Remaining List" : "All List"}`}
        lists={completeValue ? listsSelected(false) : movies}
        handelEvent={handelEvent}
      />
      <hr />
      <Footer
        handelAddEvent={handelAddEvent}
        handelCompleteValue={handelCompleteValue}
        textHeadLine="Add more to list from Here"
        textButton="Add"
        textRemove={`${completeValue ? "Hide" : "Show"} Selected List`}
      />
      {completeValue && (
        <List
          listHeadLine="Completed List"
          lists={listsSelected(completeValue)}
          handelEvent={handelEvent}
        />
      )}
    </div>
  );
}

export default App;
