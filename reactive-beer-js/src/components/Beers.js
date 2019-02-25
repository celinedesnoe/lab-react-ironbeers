import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header.js";
import "./Beers.css";

function getBeerAddress(beer) {
  return `/beer-details/${beer._id}`;
}

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeers: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(response => {
        console.log(response.data);
        this.setState({ allBeers: response.data });
      })
      .catch(() => {
        alert("Something went wrong...");
      });
  }

  render() {
    const { allBeers } = this.state;
    return (
      <section className="Beers">
        <Header />

        {allBeers.map(oneBeer => (
          <div key={oneBeer._id}>
            <div>
              <img src={oneBeer.image_url} />
            </div>
            <div>
              <h2>
                <Link to={getBeerAddress(oneBeer)}>{oneBeer.name}</Link>
              </h2>
              <p>{oneBeer.tagline}</p>
              <p>Created by: {oneBeer.contributed_by}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default Beers;
