import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './component/home/Home'
import Detail from './component/detail-film/Detail'
import { HomeTemplate } from './_core/template/templateRouter'
import './style.css'
import { fetchAllMovies } from './redux/reducer/action'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <HomeTemplate path="/" Component={Home} />
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
  componentDidMount() {
    this.props.dispatch(fetchAllMovies())
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {}
}

export default connect(mapStateToProps, null)(App)