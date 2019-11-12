import React, { Component } from 'react'

export default class Filmon extends Component {
          render() {
                    return (
                              
            <div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="mon" role="tabpanel">
    <div className="row pt-5">
      <div className="col-2">
        <img src="./img/movie-11.jpg" alt className="img-fluid" />
      </div>
      <div className="col-10">
        <span style={{color: '#fbbd61'}}>ACTION, ADVENTURE, FANTASY</span>
        <h1>It's over</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe excepturi quod sequi quaerat voluptas!</p>
        <a href="#"> 
          <i className="fa fa-angle-right" />   
          FULL SYNOPSIS
        </a>
        <div className="showtimes__movie d-flex justify-content-between"> 
          <div>
            <i className="fa fa-clock-o" />
            <span>VIEWING TIMES</span>
            <button className="btn btn-secondary">14:25</button>
            <button className="btn btn-secondary">16:25</button>
            <button className="btn btn-secondary">17:25</button>
            <button className="btn btn-secondary">18:25</button>
          </div>
          <p className="showtimes__duration">105 MINS <span className="bg-dark text-white rounded-circle d-inline-block">15</span></p>
          <div className="tab-pane " id="tue" role="tabpanel">TUE</div>
          <div className="tab-pane " id="wed" role="tabpanel">WED</div>
          <div className="tab-pane " id="thu" role="tabpanel">THU</div>
          <div className="tab-pane " id="fri" role="tabpanel">FRI</div>
          <div className="tab-pane " id="sat" role="tabpanel">SAT</div>
          <div className="tab-pane " id="sun" role="tabpanel">SUN</div>
        </div>
      </div>
    </div></div></div>


                              
                    )
          }
}
