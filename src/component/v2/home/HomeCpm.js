import React, { Component } from 'react'
import './styles/home.scss'
import GlobalCenimasCpm from './GlobalCenimasCpm'
import CarouselCpm from './CarouselCpm'
import FilmsCpm from './film/FilmsCpm'
import NewsCpm from './news/NewsCpm'

export default class HomeCpm extends Component {
  render() {
    return (
      <div className="cpm-home">
        <CarouselCpm/>
        <FilmsCpm/>
        <GlobalCenimasCpm/>
        <NewsCpm/>
      </div>
    )
  }
}
