import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <section className="slider">
        <div
          id="myCarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item item-1 active" style={{backgroundImage: 'url(/img/hero-1.jpg)'}}>
              {/* <img src="./img/hero-1.jpg" class="d-block w-100" alt="..." /> */}
              <div className="overlay" />
              <div className="carousel-cap container">
                <p style={{ color: "#fbbd61" }}>ACTION, ADVENTURE, FANTASY</p>
                <h1 className="display-4">END OF THE WORLD: PART I</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae tenetur architecto minus officiis quas voluptatum nihil
                  earum! Quae suscipit nulla iste dolore labore
                  <br />
                  veritatis esse porro in nemo.
                </p>
                <button
                  className="btn btn-play"
                  data-toggle="modal"
                  data-target="#modalTrailer"
                >
                  Play trailer
                </button>
              </div>
            </div>
            <div className="carousel-item item-2">
              {/* <img src="./img/hero-2.jpg" class="d-block w-100" alt="..." /> */}
              <div className="overlay" />
              <div className="carousel-cap container">
                <p style={{ color: "#fbbd61" }}>ACTION, ADVENTURE, FANTASY</p>
                <h1 className="display-4">END OF THE WORLD: PART II</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae tenetur architecto minus officiis quas voluptatum nihil
                  earum! Quae suscipit nulla iste dolore labore
                  <br />
                  veritatis esse porro in nemo.
                </p>
                <button
                  className="btn btn-play"
                  data-toggle="modal"
                  data-target="#modalTrailer"
                >
                  Play trailer
                </button>
              </div>
            </div>
            <div className="carousel-item item-3">
              {/* <img src="./img/hero-3.jpg" class="d-block w-100" alt="..." /> */}
              <div className="overlay" />
              <div className="carousel-cap container">
                <p style={{ color: "#fbbd61" }}>ACTION, ADVENTURE, FANTASY</p>
                <h1 className="display-4">END OF THE WORLD: PART III</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae tenetur architecto minus officiis quas voluptatum nihil
                  earum! Quae suscipit nulla iste dolore labore
                  <br />
                  veritatis esse porro in nemo.
                </p>
                <button
                  className="btn btn-play"
                  data-toggle="modal"
                  data-target="#modalTrailer"
                >
                  Play trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


// const DATA = [
//   {image: ''}
// ]