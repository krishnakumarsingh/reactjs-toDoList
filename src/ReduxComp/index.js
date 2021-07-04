import { Provider } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import store from "./store";
import ReduxCompContainer from "./ReduxCompContainer.js";
import ReduxComp2Container from "./ReduxComp2Container.js";

const ReduxComp = (props) => {
  const [cardsStyle, setCardsStyle] = useState("cards-style");
  const [chunkCount, setChunkCount] = useState(9);
  const [compShowToggle, setCompShowToggle] = useState(true);

  const navBar = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Redux Component
            </li>
            <li>
              <input
                type="button"
                className={`btn btn-outline-danger ml-1 ${
                  compShowToggle && "active"
                }`}
                onClick={() => setCompShowToggle(true)}
                value="Show comp1"
              />
            </li>
            <li>
              <input
                type="button"
                className={`btn btn-outline-danger ml-1 ${
                  !compShowToggle && "active"
                }`}
                onClick={() => setCompShowToggle(false)}
                value="Show comp2"
              />
            </li>
          </ol>
        </nav>
        <span className="navbar-text">
          <i
            className={`fas fa fa-th-large ft-2 mr-2 ${
              cardsStyle === "cards-container" ? "" : "active"
            }`}
            onClick={() => {
              setCardsStyle("cards-style");
              setChunkCount(9);
            }}
          ></i>
          <i
            className={`fas fa fa-bars ft-2 ${
              cardsStyle === "cards-style" ? "" : "active"
            }`}
            onClick={() => {
              setCardsStyle("cards-container");
              setChunkCount(10);
            }}
          ></i>
        </span>
      </div>
    </nav>
  );
  if (compShowToggle) {
    return (
      <Provider store={store}>
        {navBar}
        <ReduxCompContainer
          {...props}
          cardsStyle={cardsStyle}
          chunkCount={chunkCount}
        />
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      {navBar}
      <ReduxComp2Container
        {...props}
        cardsStyle={cardsStyle}
        chunkCount={chunkCount}
      />
    </Provider>
  );
};

export default ReduxComp;
