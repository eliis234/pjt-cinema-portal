import React, { Component } from "react";
import FilmItem from "./FilmItem";
import OwlCarousel from "react-owl-carousel2";
import "./filmsCpm.scss";
import { getAllFilm } from "../../../../services/movieSevice";

export default class FilmsCpm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  render() {
    console.log(this.state.movies);
    const options = {
      items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ]
    };

    const events = {
      onDragged: function(event) {},
      onChanged: function(event) {}
    };
    return (
      <div className="cm-film-cpm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <OwlCarousel ref="car" options={options} events={events}>
                {this._renderFilmItem()}                
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderFilmItem(){
    return this.state.movies.slice(1, 12).map((item, index)=>{
      return (
        <FilmItem data={item} key={index}/>
      )
    })
  }

  componentDidMount() {
    getAllFilm()
      .then(res => {
        this.setState({ movies: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
