import React, { Component } from "react";
import "./style/GlobalCenimasDetail.scss";
import * as _ from "lodash";
import moment from "moment";
import TabsCenimaCpm from "./TabsCenimaCpm";
import { Link } from "react-router-dom";

export default class GlobalCenimasDetailCpm extends Component {
  _renderLichChieu() {
    const { lichChieu } = this.props.data;
    console.log(lichChieu);
    let group = _.groupBy(lichChieu, i => {
      return moment(i.ngayChieuGioChieu).format("MM-DD-YYYY");
    });
    console.log(group);
    return Object.keys(group).map((item, index) => {
      return (
        <div className="col-6 text-center">
          <div className="film-items-title" key={index}>
            {item}
          </div>
          <div className="film-items-content">
            <div className="row">
              {group[item].map((i, idx) => {
                const time = moment(i.ngayChieuGioChieu).format("HH:mm");
                return (
                  <div className="col-2 mt-2">
                    <Link to="/booking">
                      <span className="time">{time}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  }

  initData = () => {
    let lichChieu = {
      title: "Lịch Chiếu",
      content: (
        <div className="container">
          <div className="row">{this._renderLichChieu()}</div>
        </div>
      )
    };
    return [lichChieu, THONG_TIN, BINH_LUAN];
  };
  render() {
    // const {
    //   lichChieu,
    //   maPhim,
    //   tenPhim,
    //   biDanh,
    //   trailer,
    //   hinhAnh,
    //   moTa,
    //   maNhom,
    //   ngayKhoiChieu,
    //   danhGia
    // } = this.props.data;

    this._renderLichChieu();

    return (
      <div className="cm-global-cenima-cpm">
        {/* <TabsCenimaCpm /> */}
        <div className="detail-content">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <TabsCenimaCpm data={this.initData()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const THONG_TIN = {
  title: "Thông Tin",
  content: (
    <div className="tab-pane container fade" id="ThongTin">
      <div className="detail-info">
        <h2 className="title">Nội dung phim</h2>
        <p>movie.MoTa</p>
      </div>
      <div className="haddings pt-30">
        <div className="container">
          <div className="hadding-area">
            <h2>Tin tức mới nhất</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 news_bg">
          <div className="news-image">
            <img src="item.img" alt="item.img" />
            <span className="news-date">item.release</span>
          </div>
          <a className="news-title" href="abc.xyz">
            <p className="mt-3">item.title</p>
          </a>
          <p className="news-content">item.content</p>
          <div className="blockIcon">
            <i className="fa fa-thumbs-up" />
            <span className="ml-2">item.like</span>
            <i className="fa fa-comment ml-4" />
            <span className="ml-2">0</span>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 news_bg">
          <div className="news-image">
            <img src="item.img" alt="item.img" />
          </div>
          <a className="news-title" href="abc.xyz">
            <p className="mt-3">item.title</p>
          </a>
          <p className="news-content">item.content</p>
          <div className="blockIcon">
            <i className="fa fa-thumbs-up" />
            <span className="ml-2">item.like</span>
            <i className="fa fa-comment ml-4" />
            <span className="ml-2">0</span>
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="news-item">
            <a href="abc.xyz">
              <img src="item.img" alt="item.img" />
            </a>
            <p className="news-item_title">item.title</p>
          </div>
        </div>
      </div>
    </div>
  )
};

const BINH_LUAN = {
  title: "Bình Luận",
  content: (
    <div className="tab-pane container fade" id="BinhLuan">
      {/* <app-detail-comment [movie]="movie" /> */}
    </div>
  )
};
