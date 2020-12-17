import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "../views/home";
const ComponentGenerator = (props) => {
  console.log("com", props);
  let Provided = props.component;
  return (
    <>
      {props.headerVisible && <Header />}
      <Provided />
      {props.footerVisible && <Footer />}
    </>
  );
};
export default class Navigate extends Component {
  routeData = [
    {
      path: "/",
      component: Home,
      headerVisible: false,
      footerVisible: false,
    },
  ];

  render() {
    return (
      <Switch>
        {this.routeData.map((routeInfo) => {
          console.log("ri", routeInfo);
          return (
            <Route
              path={routeInfo.path}
              render={(props) => (
                <ComponentGenerator {...props} {...routeInfo} />
              )}
            />
          );
        })}
      </Switch>
    );
  }
}
