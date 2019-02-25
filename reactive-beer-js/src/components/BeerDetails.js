import React, { Component } from "react";
import axios from "axios";
import Header from "./Header.js";

import "./BeerDetails.css";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerItem: {}
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    console.log(this.props.match);
    console.log({ params });
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params.beerId}`)
      .then(response => {
        console.log(response.data);
        this.setState({ beerItem: response.data });
      })
      .catch(() => alert("Sorry somehting went wrong"));
  }

  render() {
    const { beerItem } = this.state;
    return (
      <section className="BeerDetails">
        <Header />
        <img src={beerItem.image_url} />
        <h2> {beerItem.name}</h2>
        <p>{beerItem.tagline}</p>
        <p>{beerItem.first_brewed}</p>
        <p>{beerItem.attenuation_level}</p>
        <p>{beerItem.description}</p>
        <p>{beerItem.contributed_by}</p>
      </section>
    );
  }
}

export default BeerDetails;
