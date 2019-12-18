import React, { Component } from "react";
import "./styles/Header.scss";
import ModalLogin from "./ModalLogin";
// import { Button } from 'react-bootstrap';
import { connect } from "react-redux";

class Header extends Component {
  _renderNameUser = () => {
    let { userLogin } = this.props;
    if (userLogin.hoTen) {
      return (
        <span className="user-login-name">{userLogin.hoTen}</span>
      );
    }
    return (
      <>
        <ModalLogin />
        {/* <span className="sign-btn">Đăng ký</span> */}
      </>
    );
  };
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-md m-0">
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
              {DATA_NAV.map((i, idx) => {
                return (
                  <li className="nav-item" key={idx}>
                    <span className="nav-link">{i.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="header-right">
            <ul className="social">
              <li>
                <span className="icon">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-google-plus-g"></i>
                </span>
              </li>
            </ul>
            <div className="sign">{this._renderNameUser()}</div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLogin: state.user.userLogin
  };
};

export default connect(mapStateToProps, null)(Header);

const DATA_NAV = [
  {
    name: "Trang chủ",
    link: "/home"
  },
  {
    name: "Lịch chiếu",
    link: ""
  },
  {
    name: "Cụm rạp",
    link: ""
  },
  {
    name: "Tin tức",
    link: ""
  }
];
