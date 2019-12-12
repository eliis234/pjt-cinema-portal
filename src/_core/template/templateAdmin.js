import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/admin.scss";

export class AdminTemplate extends React.Component {
  render() {
    // console.log(this.props);
    const Cmp = this.props.Component;
    return (
      <div className="cm-tp-admin">
        <div class="wrapper">
          <nav id="sidebar">
            <div class="sidebar-header">
              <img src="../../../assets/images/logo6.png" alt="" />
              <strong>TMN</strong>
            </div>
            <ul class="list-unstyled components">
              <li class="active">
                <NavLink to="/admin" activeClassName="active">
                  <i class="fa fa-home"></i>
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-user-management" activeClassName="active">
                  <i class="fa fa-user"></i>
                  Người dùng
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-movie-management" activeClassName="active">
                  <i class="fa fa-film"></i>
                  Phim
                </NavLink>
              </li>
            </ul>
          </nav>
          <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                  <i class="fa fa-bars"></i>
                </button>
                <button
                  class="btn btn-dark d-inline-block d-lg-none ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-align-justify"></i>
                </button>
              </div>
            </nav>
            <div class="container text-justify">
              <Cmp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
