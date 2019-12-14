import React, { Component } from 'react'
import './style/filmdetail.scss';
import InfoCpm from './InfoCpm';
import GlobalCenimasDetailCpm from './GlobalCenimasDetailCpm';

export default class FilmDetail extends Component {
  render() {
    return (
      <div>
        <InfoCpm/>
        <GlobalCenimasDetailCpm/>
      </div>
    )
  }
}
