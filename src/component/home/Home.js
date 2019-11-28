import React, { Component } from "react";
import Carousel from "./carousel/Carousel";
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
        <div className="container">
          <div className="col-12">
            <Filmdangchieu />
            <Filmsapchieu />
          </div>
        </div> 
        
        {/* <Footer /> */}
      </>
    );
  }
}
