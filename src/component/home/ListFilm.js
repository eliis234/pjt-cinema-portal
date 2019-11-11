import React, { Component } from "react";
import ItemFilm from './ItemFilm'

export default class ListFilm extends Component {
  render() {
    return (
      <section className="movies">
        <div className="container">
          <h1>SHOWING MOVIE</h1>
          <div className="row">
                    <ItemFilm/>
                    <ItemFilm/>
                    <ItemFilm/>
                    <ItemFilm/>
                   
          </div>
        </div>
      </section>
    );
  }
}
