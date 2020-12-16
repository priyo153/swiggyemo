import React, { Component } from "react";
import { Router } from "react-router-dom";
import { history } from "./history";
import Navigate from "./navigate";

export default class DesktopApp extends Component {
  c;

  render() {
    return (
      <Router history={history}>
        <Navigate />
      </Router>
    );
  }
}
