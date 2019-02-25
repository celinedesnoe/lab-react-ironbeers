import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <section className="Header">
        <Link to="/">HOME</Link>
      </section>
    );
  }
}

export default Header;
