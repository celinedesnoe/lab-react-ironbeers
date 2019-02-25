import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <section className="HomePage">
        <div>
          <img
            alt="beer"
            src="https://media.giphy.com/media/h8NdYZJGH1ZRe/giphy.gif"
          />
          <NavLink to="/beers">All Beers</NavLink>
        </div>
        <div>
          <NavLink to="/randm-beer">Random Beer</NavLink>
        </div>
        <div>
          <NavLink to="/new-beer">New Beer</NavLink>
        </div>
      </section>
    );
  }
}

export default HomePage;
