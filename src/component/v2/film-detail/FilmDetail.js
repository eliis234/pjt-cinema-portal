import React, { Component } from "react";
import "./style/filmdetail.scss";
import InfoCpm from "./InfoCpm";
import GlobalCenimasDetailCpm from "./GlobalCenimasDetailCpm";
import * as _ from "lodash";
import {getDetailFilm} from '../../../services/movieSevice';


export default class FilmDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      movie: {}
    }
  }

  render() {
    return (
      <div>
        <InfoCpm data={this.state.movie}/>
        <GlobalCenimasDetailCpm data={this.state.movie}/>
      </div>
    );
  }

  componentDidMount() {
    let id = _.get(this.props, "params.id", "");
    console.log(id);
    if (id) {
      getDetailFilm(id).then(({data}) => {
        console.log(data);
        this.setState({movie: data})
      })
    }
  }
}
