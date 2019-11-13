import React, { Component } from "react";
import Item from "./Item";

export default class Carousel extends Component {
  _source = []
  constructor(props) {
    super(props)
    this._source = initData
  }

  _renderControl = () => {
    return this._source.map((item, index) => {
      return (
        <li
          key={index}
          data-target="#caroudelMovie"
          data-slide-to={index}
          className={index <= 0 ? 'active' : ''}
        />
      )
    })
  }

  _renderItem = () => {
    return this._source.map((item, index) => {
      return (
        <Item key={index} data={{ img: item.img, active: index <= 0 }} />
      )
    })
  }

  render() {
    return (
      <section className="slider">
        <div
          id="caroudelMovie"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">{this._renderControl()}</ol>
          <div className="carousel-inner">{this._renderItem()}</div>
        </div>
      </section>
    );
  }
}


const initData = [
  {
    img: '/img/hero-1.jpg'
  }, {
    img: '/img/hero-2.jpg'
  }, {
    img: '/img/hero-3.jpg'
  }
]