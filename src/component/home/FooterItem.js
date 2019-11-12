import React, { Component } from 'react'

export default class FooterItem extends Component {
          render() {
                    return (
                              
                                       <section className="comingsoon">
  <div className="comingsoon__background">
    <div className="overlay" />
    <div className="container">
      <h1 className="py-5" style={{color: 'white'}}>COMING SOON</h1>
      <div className="row py-4">
        <div className="col-6">
          <p style={{color: '#ec7532'}}>COMEDY CRIME</p>
          <h2>The Hangover Part III</h2>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <span>
            <i className="fa fa-calendar" />
            30 September 2017
          </span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At sint quia, blanditiis rem aperiam hic.</p>  
          <span style={{color: 'orange'}}>MORE INFO &gt;</span>
        </div>
        {/* <div class="col-6">
                  <img src="./img/slide-3-video.png">
                  <i class="fa fa-play"></i>
              </div>  */}
      </div>
    </div>
  </div>
</section>

                              
                    )
          }
}
