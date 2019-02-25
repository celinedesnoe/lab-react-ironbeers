import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Beers from "./components/Beers.js";
import BeerDetails from "./components/BeerDetails.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beer-details/:beerId" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
