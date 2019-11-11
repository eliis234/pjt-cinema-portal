import React, { Component } from "react";

export default class ItemFilm extends Component {
  render() {
    return (
      <div className="col-lg-3 col-sm-6">
        <div className="movies__item-img">
          <img src="./img/movie-4.jpg" />
          <div className="overlay" />
          <div className="movies__item-detail">
            <i className="fa fa-play" />
            <a className="d-block" style={{ color: "white" }}>
              Read more
            </a>
            <span style={{ color: "white" }}>Release: 7, Mar 2017</span>
          </div>
        </div>
        <div className="movies__item-info">
          <p>Hush</p>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
    );
  }
}
