import React, { Component } from "react";
import Filmon from './Filmon'
export default class Tabfilm extends Component {
  render() {
    return (
     <section classname="showtimes py-5">
  <div classname="container">
    <ul classname="nav nav-tabs" id="myTab" role="tablist">
      <li classname="nav-item">
        <a classname="nav-link active" id="mon-tab" data-toggle="tab" href="#mon" role="tab">
          MON
        </a>
      </li>
    </ul>
  </div>
  <Filmon />
</section>


    );
  }
}
