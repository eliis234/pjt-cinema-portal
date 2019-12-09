import React from "react";
import { Link } from "react-router-dom";

export class AdminTemplate extends React.Component {
  render() {
    // console.log(this.props);
    const Cmp = this.props.Component
    return (
      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <img src="../../../assets/images/logo6.png" alt="" />
            <strong>TMN</strong>
          </div>

          <ul class="list-unstyled components">
            <li class="active">

              <Link to="/admin">
                <i class="fa fa-home"></i>
                Trang chủ
            </Link>
            </li>
            <li>
              <Link to="/admin/user-management">
                <i class="fa fa-user"></i>
                Người dùng
            </Link>
            </li>
            <li>
              <Link to="/admin/movie-management">
                <i class="fa fa-film"></i>
                Phim
              </Link>
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
    )
  }
}
