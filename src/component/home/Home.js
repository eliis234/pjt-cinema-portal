import React, { Component } from "react";
import Carousel from "./Carousel";
import ListFilm from "./ListFilm";
import Filmdangchieu from './Filmdangchieu'
import Filmsapchieu from './Filmsapchieu'
// import Footer from './Footer'
export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <ListFilm />
        <Filmdangchieu /> <Filmsapchieu />
        {/* <Footer /> */}
      </>
    );
  }
}
