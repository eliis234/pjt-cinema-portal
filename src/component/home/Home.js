import React, { Component } from "react";
import Carousel from "./Carousel";
import ListFilm from "./ListFilm";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <ListFilm />
      </>
    );
  }
}
