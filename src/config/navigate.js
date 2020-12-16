import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../views/home";

export default class Navigate extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}
