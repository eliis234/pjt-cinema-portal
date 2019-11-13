import React, { Component } from "react";
import Filmon from './Filmon'
export default class Tabfilm extends Component {
  render() {
    return (
      <section className="showtimes py-5">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="mon-tab" data-toggle="tab" href="#mon" role="tab">
              MON
            </a>
          </li>
        </ul>
        <Filmon />
      </section>
    );
  }
}
