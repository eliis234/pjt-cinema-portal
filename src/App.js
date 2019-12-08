import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { HomeTemplate } from "./_core/template/templateRouter";
import { fetchAllMovies } from "./redux/reducer/action";

import HomeCpm from "./component/v2/home/HomeCpm";
import FilmDetail from "./component/v2/film-detail/style/FilmDetail";
import AdminCpm from "./component/v2/admin/AdminCpm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeTemplate Component={HomeCpm} />
          </Route>
          <Route exact path="/detail">
            <HomeTemplate Component={FilmDetail} />
          </Route>
          <Route exact path="/admin">
            <AdminCpm/>
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
