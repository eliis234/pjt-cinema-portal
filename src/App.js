import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { HomeTemplate } from "./_core/template/templateRouter";
import { fetchAllMovies } from "./redux/reducer/action";

import HomeCpm from "./component/v2/home/HomeCpm";
import FilmDetail from "./component/v2/film-detail/FilmDetail";
import BookingCpm from "./component/v2/booking/BookingCpm";
import { AdminTemplate } from "./_core/template/templateAdmin";
import IntroduceAdmin from "./component/v2/admin/IntroduceAdmin";
import Storybook from "./component/v2/admin/StoryBook";
import UserManagementComponent from "./component/v2/admin/UserManagementComponent";
import MovieManagementComponent from "./component/v2/admin/MovieManagementComponent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <HomeTemplate {...props} Component={HomeCpm} />}
          />
          <Route
            exact
            path="/detail/:id"
            component={(props) => <HomeTemplate {...props} Component={FilmDetail} />}
          />
          <Route
            exact
            path="/booking/:id"
            component={(props) => <HomeTemplate {...props} Component={BookingCpm} />}
          />
          <Route
            exact
            path="/admin"
            component={(props) => <AdminTemplate {...props} Component={IntroduceAdmin} />}
          />
          <Route
            exact
            path="/history"
            component={(props) => <AdminTemplate {...props} Component={Storybook} />}
          />
          <Route
            exact
            path="/admin-user-management"
            component={(props) => <AdminTemplate {...props} Component={UserManagementComponent} />}
          />
          <Route
            exact
            path="/admin-movie-management"
            component={(props) => <AdminTemplate {...props} Component={MovieManagementComponent} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchAllMovies());
  }
}

export default connect(null, null)(App);
