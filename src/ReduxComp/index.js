import { Provider } from "react-redux";
import React from "react";
import store from "./store";
import ReduxCompContainer from "./ReduxCompContainer.js";

const ReduxComp = (props) => {
  return (
    <Provider store={store}>
      <ReduxCompContainer {...props} />
    </Provider>
  );
};

export default ReduxComp;
