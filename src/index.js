import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DesktopApp from "./config/desktopApp";
import { Provider } from "react-redux";
import storeReducer from "./config/storeReducer";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./config/rootSaga";

const saga = createSagaMiddleware();
const store = createStore(storeReducer, applyMiddleware(saga));

saga.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <DesktopApp />
  </Provider>,
  document.getElementById("root")
);
