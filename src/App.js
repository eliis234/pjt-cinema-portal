import React, { Component } from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'

import { HomeTemplate } from './_core/template/templateRouter'
import { fetchAllMovies } from './redux/reducer/action'

import HomeCpm from './component/v2/home/HomeCpm'
import FilmDetail from './component/v2/film-detail/FilmDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <HomeTemplate path="/" Component={HomeCpm} />
          <HomeTemplate path="detail" Component={FilmDetail}/>
        </Switch>
      </BrowserRouter>
    )
  }
  componentDidMount() {
    this.props.dispatch(fetchAllMovies())
  }
}

export default connect(null, null)(App)