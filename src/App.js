import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.scss"

import { Home } from "./views/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* your components will go here */}
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
