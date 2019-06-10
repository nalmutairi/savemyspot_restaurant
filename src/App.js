import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";

//Components
import Login from "./Components/Login";
import Queue from "./Components/Queue";
import Header from "./Components/Header";

class App extends Component {
  getView() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login/" />
        <Route path="/login/" component={Login} />
        <Route path="/queue/" component={Queue} />
      </Switch>
    );
  }
  render() {
    return (
      <div
        style={{ minHeight: "100vh", backgroundColor: "white" }}
        className="App"
      >
        <Header />
        <main>{this.getView()}</main>
      </div>
    );
  }
}

export default withRouter(App);
