import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './component/home/Home'
import Detail from './component/detail-film/Detail'
import {HomeTemplate} from './_core/template/templateRouter'
import './style.css'
export default class App extends Component {
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
}
