import React, { Component } from "react";
import './style/infoCpm.scss';

export default class InfoCpm extends Component {
  render() {
    return (
      <div className="cm-info-cpm">
        <div className="detail-trailer">
          <img
            className="detail-background"
            src="movie.HinhAnh"
            alt="detail img"
          />
          <div className="detail-trailer-bg" />
          <img
            className="play-video"
            src="/img/images/play-video.png"
            alt="img detail film"
            data-toggle="modal"
            data-target="#movieDetailTrailer"
          />
          <div className="border-play-video" />
        </div>
        <div className="row detail-desc">
          <div className="col-sm-12 col-xs-12">
            <div className="detail-review">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                  <div className="detail-review-img">
                    <img src="movie.HinhAnh" alt="img" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 right-col">
                  <div className="detail-reivew-des">
                    <div className="detail-title">
                      <h2> movie.TenPhim </h2>
                    </div>
                    <div className="detail-rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                    <div className="detail-description">
                      <ul>
                        <li>
                          <span>Ngày phát hành :</span>
                          <a href> movie.NgayKhoiChieu | date: "dd-MM-yyyy"</a>
                        </li>
                        <li>
                          <span>
                            Đạo diễn <label>:</label>
                          </span>
                          <a href>Priti kapel, Justin orjun</a>
                        </li>
                        <li>
                          <span>
                            Diễn viên <label>:</label>
                          </span>
                          <a href>Charlotte Vega, Patrick Wilson</a>
                        </li>
                        <li>
                          <span>
                            Thể loại <label>:</label>
                          </span>
                          <a href>kinh dị</a>
                        </li>
                        <li>
                          <span>
                            Định dạng <label>:</label>
                          </span>
                          <a href>2D / Digital / 4DX</a>
                        </li>
                        <li>
                          <span>
                            Quốc gia SX <label>:</label>
                          </span>
                          <a href>Mỹ</a>
                        </li>
                      </ul>
                    </div>
                    <div className="detail-social-link">
                      <strong>Share</strong>
                      <a href className="social-fb">
                        <span className="fa fa-facebook" />
                      </a>
                      <a href className="social-tw">
                        <span className="fa fa-twitter" />
                      </a>
                      <a href className="social-sk">
                        <span className="fa fa-skype" />
                      </a>
                      <a href className="social-pin">
                        <span className="fa fa-pinterest" />
                      </a>
                      <a href className="social-ins">
                        <span className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The Modal */}
        <div className="modal" id="movieDetailTrailer" data-backdrop="static">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal body */}
              <div className="modal-body">
                {/* <iframe width="100%" height="100%" src="detailTrailer | safe" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
              </div>
              <button
                title="Close (Esc)"
                type="button"
                className="modal-close"
                data-dismiss="modal"
              >
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
