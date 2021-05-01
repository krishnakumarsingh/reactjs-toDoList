import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store;
