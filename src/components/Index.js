import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../stores/store';

import '../styles/App.css';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Switch>
              {/* your components will go here */}
              <Route exact path="/" component={Home} />
            </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;