import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { HomeTemplate } from "./_core/template/templateRouter";
import { fetchAllMovies } from "./redux/reducer/action";

import HomeCpm from "./component/v2/home/HomeCpm";
import FilmDetail from "./component/v2/film-detail/FilmDetail";
import { AdminTemplate } from "./_core/template/templateAdmin";
import IntroduceAdmin from "./component/v2/admin/IntroduceAdmin";
import UserManagementComponent from "./component/v2/admin/UserManagementComponent";
import MovieManagementComponent from "./component/v2/admin/MovieManagementComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeTemplate Component={HomeCpm} />
          </Route>
          <Route exact path="/detail/:id">
            <HomeTemplate Component={FilmDetail} />
          </Route>
          <Route exact path="/admin">
            <AdminTemplate Component={IntroduceAdmin} />
          </Route>
          <Route exact path="/admin-user-management">
            <AdminTemplate Component={UserManagementComponent} />
          </Route>
          <Route exact path="/admin-movie-management">
            <AdminTemplate Component={MovieManagementComponent} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchAllMovies());
  }
}

export default connect(null, null)(App);
