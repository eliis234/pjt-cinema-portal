import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import './style/admin.scss'
import IntroduceAdmin from './introduceAdmin/IntroduceAdmin';
import { AdminTemplate } from './../../../_core/template/templateAdmin';
import userManagementComponent from './userManagement/userManagementComponent';
import movieManagementComponent from './movieManagement/movieManagementComponent';

class AdminCpm extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin">
            <AdminTemplate Component={IntroduceAdmin} />
          </Route>
          <Route exact path="/admin/user-management">
            <AdminTemplate Component={userManagementComponent} />
          </Route>
          <Route exact path="/admin/movie-management">
            <AdminTemplate Component={movieManagementComponent} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AdminCpm;