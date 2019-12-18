import React from "react";
import { NavLink } from "react-router-dom";
import ModalLogin from "../component/ModalLogin";
import "./styles/admin.scss";
import * as _ from 'lodash';
import { connect } from "react-redux";

export class AdminTemplate extends React.Component {
  _renderNameUser = () => {
    let userLogin = _.get(this.props, 'userLogin', false);
    console.log(userLogin)
    if (userLogin) {
      return <span className="user-login-name">{userLogin.hoTen}</span>;
    }
    return <ModalLogin />;
  };
  render() {
    // console.log(this.props);
    const Cmp = this.props.Component;
    return (
      <div className="cm-tp-admin">
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <img src="/img/images/logo6.png" alt="abc" />
              <strong>TMN</strong>
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <NavLink to="/admin" activeClassName="active">
                  <i className="fa fa-home"></i>
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-user-management" activeClassName="active">
                  <i className="fa fa-user"></i>
                  Người dùng
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-movie-management" activeClassName="active">
                  <i className="fa fa-film"></i>
                  Phim
                </NavLink>
              </li>
            </ul>
          </nav>
          <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-info"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto">
                  <i className="fas fa-align-justify"></i>
                </button>
                {this._renderNameUser()}
              </div>
            </nav>
            <div className="container mb-4">
              <Cmp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLogin: state.user.userLogin
  };
};

export default connect(mapStateToProps, null)(AdminTemplate);
