import React, { Component } from 'react'
import './newnew.scss'

export default class NewNewCpm extends Component {
    render() {
        return (
            <div class="cm-newnew-cpm">
         <div className="container">
  <div className="news-detail-title pt-50" id="divTitle">
    {/* title news */}
  </div>
  <div className="news-rate">
    <div className="news-rate-like">
      <i className="fa fa-thumbs-up" aria-hidden="true" />
      <span>{'{'}{'{'}newsDetailShowing.like{'}'}{'}'} LIKES</span>
    </div>
    <div className="news-rate-comment">
      <i className="fa fa-comment" />
      <span>0 BÌNH LUẬN</span>
    </div>
    <div className="news-rate-share">
      <i className="fa fa-share" />
      <span>0 CHIA SẺ</span>
    </div>
  </div>
  <div className="news-detail-content pt-50" id="divContent">
    {/* content news */}
  </div>
  <div className="news-infor">
    <div className="haddings pt-50">
      <div className="container">
        <div className="hadding-area">
          <h2>Tin tức mới nhất</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 news_bg" >
        <div className="news-image">
          <img src="item.img" alt="img" />
          <span className="news-date">{'{'}{'{'}item.release{'}'}{'}'}</span>
        </div>
        <a className="news-title">
          <p className="mt-3">{'{'}{'{'}item.title{'}'}{'}'}</p>
        </a>
        <p className="news-content">{'{'}{'{'}item.content{'}'}{'}'}</p>
        <div className="blockIcon">
          <i className="fa fa-thumbs-up" />
          <span className="ml-2">{'{'}{'{'}item.like{'}'}{'}'}</span>
          <i className="fa fa-comment ml-4" /><span className="ml-2">0</span>
        </div>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-4 news_bg">
        <div className="news-image">
          <img src="item.img" alt="img" />
        </div>
        <a className="news-title">
          <p className="mt-3">{'{'}{'{'}item.title{'}'}{'}'}</p>
        </a>
        <p className="news-content">{'{'}{'{'}item.content{'}'}{'}'}</p>
        <div className="blockIcon">
          <i className="fa fa-thumbs-up"  /><span className="ml-2">{'{'}{'{'}item.like{'}'}{'}'}</span>
          <i className="fa fa-comment ml-4" /><span className="ml-2">0</span>
        </div>
      </div>
      <div className="col-md-4 p-0">
        <div className="news-item" >
          <a><img src="item.img" alt="img" /></a>
          <p className="news-item_title">{'{'}{'{'}item.title{'}'}{'}'}</p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}
