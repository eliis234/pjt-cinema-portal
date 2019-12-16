import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./filmitem.scss";

export default class FilmItem extends Component {
  render() {
    const {maPhim, tenPhim, danhGia, hinhAnh, ngayKhoiChieu } = this.props.data;
    return (
      <div className="cm-film-item-cpm">
        <div className="movie-item">
          <div className="movie-item_img">
            <a href="exam">
              <img src={hinhAnh} alt="img" />
            </a>
            <div className="movie-item_video">
              <img
                className="play-video"
                src="/img/images/play-video.png"
                data-toggle="modal"
                data-target="#myModalTrailer"
                alt="img"
              />
              <span className="movie_date">{ngayKhoiChieu}</span>
              <div className="movie_ratting">
                <a href="exam">
                  <span className="fa fa-star" />
                  {danhGia}/10
                </a>
              </div>
            </div>
          </div>
          <div className="movie_content">
            <div className="movie_name">{tenPhim}</div>
            <div className="movie_info">106 phút - 6.5 IMDb</div>
            <Link to={`/detail/${maPhim}`}><button className="btn muave">MUA VÉ</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
