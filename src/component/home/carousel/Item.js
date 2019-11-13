import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let { img, active: at} = this.props.data
    let active = at ? 'active' : ''
    return (
      <div className={"carousel-item item-1 " + active} style={{ backgroundImage: `url(${img || '/img/hero-1.jpg'})` }}>
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
    )
  }
}
