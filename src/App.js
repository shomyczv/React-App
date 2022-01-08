import React, { Component } from "react";
import TodoList from "./TodoList";
import {Route, Switch} from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
