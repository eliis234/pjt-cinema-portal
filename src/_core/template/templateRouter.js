import React from 'react'
import {Route} from 'react-router-dom'
import Header from '../component/Header'


export const HomeTemplate = (props) =>{
          const {Component, path} = props
          return (
                    <Route exact path={path}>
                              <Header/>
                              <Component/>
                    </Route>
          )
}