import React, { Component } from 'react'
import './styles/home.scss'
import GlobalCenimasCpm from './GlobalCenimasCpm'
import CarouselCpm from './CarouselCpm'
import SearchCpm from './SearchCpm'
import FilmsCpm from './film/FilmsCpm'

export default class HomeCpm extends Component {
  render() {
    return (
      <div className="cpm-home">
        <CarouselCpm/>
        <SearchCpm/>
        <FilmsCpm/>
        <GlobalCenimasCpm/>
      </div>
    )
  }
}
