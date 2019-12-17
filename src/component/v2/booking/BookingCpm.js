import React, { Component } from "react";
import * as _ from "lodash";
import { getDetailRooms } from "../../../services/movieSevice";
import "./booking-cpm.scss";

export default class BookingCpm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      chairs: [],
      chairsBooking: []
    };
  }

  _renderChair() {
    return this.state.chairs.slice(0, 50).map((item, index) => {
      const { daDat, stt } = item;
      if (daDat) {
        return (
          <button className="disabled btn-chair" key={index}>
            {stt}
          </button>
        );
      }
      let idx = this.state.chairsBooking.findIndex(i => i.maGhe === item.maGhe);
      return (
        <button
          className={idx < 0 ? "btn-chair" : "btn-chair focus"}
          key={index}
          onClick={() => this._onClickBooking(item)}
        >
          {stt}
        </button>
      );
    });
  }

  _renderBooking() {
    const chairsBooking = this.state.chairsBooking;
    return chairsBooking.map((item, index) => {
      return (
        <div key={index}>
          <span>Ghế:{" " + item.stt}</span>
          {" - "}
          <span>Giá:{" " + item.giaVe}</span>
        </div>
      );
    });
  }

  _onClickBooking = item => {
    let { chairsBooking } = this.state;
    let index = chairsBooking.findIndex(i => i.maGhe === item.maGhe);
    // console.log(index, item);
    if (index < 0) {
      chairsBooking.push(item);
    } else {
      chairsBooking = chairsBooking.filter(i => i.maGhe !== item.maGhe);
    }
    this.setState({
      chairsBooking: chairsBooking
    });
  };

  render() {
    return (
      <div className="cm-booking-ticker-cpm">
        <div className="container bg-white p-4">
          <div className="row">
            <div className="col-8">
              <div className="content-chair">
                <h3 className="title text-dark">Danh sách ghế</h3>
                <div className="content">{this._renderChair()}</div>
              </div>
            </div>
            <div className="col-4">
              <h3 className="title text-dark">Vé đã đặt</h3>
              <div className="content-booking text-dark">
                <h5>Ghế: </h5>
                {this._renderBooking()}
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    );
  }

  componentDidMount() {
    let id = _.get(this.props, "params.id", "");
    if (id) {
      getDetailRooms(id).then(({ data }) => {
        console.log("api tra ve chi tiet lich chieu phim: ", data);
        this.setState({
          chairs: data.danhSachGhe,
          info: data.thongTinPhim
        });
      });
    }
  }
}
