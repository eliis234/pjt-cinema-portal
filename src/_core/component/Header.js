import React, { Component } from "react";
import "./styles/Header.scss";
// import { Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-md">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              {
                DATA_NAV.map((i,idx) => {
                  return (
                    <li className="nav-item" key={idx}>
                      <span className="nav-link">
                        {i.name}
                      </span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="header-right">
            <div className="social"></div>
            <div className="sign">

            </div>
          </div>
        </nav>
      </header>
    );
  }
}


const DATA_NAV = [
  {
    name: 'Trang chủ',
    link: '/home'
  },
  {
    name: 'Lịch chiếu',
    link: ''
  },{
    name: 'Cụm rạp',
    link: ''
  },{
    name: 'Tin tức',
    link: ''
  }
]