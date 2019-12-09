import React, { Component } from 'react'
import FilmItem from './FilmItem'

export default class FilmsCpm extends Component {
  render() {
    return (
      <div>
        <FilmItem/>
        <FilmItem/>
        <FilmItem/>
        <FilmItem/>
      </div>
    )
  }
}
