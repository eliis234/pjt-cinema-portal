import React, { Component } from 'react'
import NewNewCpm from './NewNewCpm'
import ReviewNewCpm from './ReviewNewCpm'

export default class NewsCpm extends Component {
  render() {
    return (
      <div>
        <NewNewCpm/>
        <hr/>
        <ReviewNewCpm/>
      </div>
    )
  }
}
