import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import './styles/carousel.scss';

export default class CarouselCpm extends Component {
  render() {
    const options = {
      items: 1,
      nav: true,
      rewind: true,
      autoplay: true
    };

    const events = {
      onDragged: function(event) {},
      onChanged: function(event) {}
    };
    return (
      <section className="carousel-cpm">
        <OwlCarousel ref="car" options={options} events={events}>
          <div>
            <img src="/img/images/carousel/carousel1.jpg" alt="The Last" />
          </div>
          <div>
            <img src="/img/images/carousel/carousel2.jpg" alt="GTA V" />
          </div>
          <div>
            <img src="/img/images/carousel/carousel3.jpg" alt="Mirror Edge" />
          </div>
        </OwlCarousel>
      </section>
    );
  }
}
