import React, { Component } from "react";
import * as _ from "lodash";
import { getDetailRooms } from "../../../services/movieSevice";
import { connect } from "react-redux";
import "./booking-cpm.scss";

class BookingCpm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      chairs: [],
      chairsBooking: []
    };
  }

  //render ra ghế
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
//render ghế đã book
  _renderBooking() {
    const chairsBooking = this.state.chairsBooking;
    return chairsBooking.map((item, index) => {
      return (
        <span key={index}>
          {item.stt}
          {index < chairsBooking.length - 1 ? ", " : ""}
        </span>
        // <div>
        //   <span key={index}>
        //    {item.stt}
        //   </span>
        //   <span> - {item.giaVe}</span>
        // </div>
      );
    });
  }
// end **
// tổng tiền
  _sumMoney() {
    let { chairsBooking } = this.state;
    let sum = 0;
    for (let i = 0; i < chairsBooking.length; i++) {
      sum += chairsBooking[i].giaVe;
    }
    return sum;
  }
// end tổng tiền


// click để đặt ghế
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
      chairsBooking: _.sortBy(chairsBooking, i => i.stt)
    });
  };
// End 


// mua vé
  _onClickPriceSticker = () => {
    let data = {
      maLichChieu: 0,
      danhSachVe: [],
      taiKhoanNguoiDung: ""
    };
    data.maLichChieu = this.state.info.maLichChieu;
    data.taiKhoanNguoiDung = this.props.userLogin.taiKhoan;
    data.danhSachVe = this.state.chairsBooking.map(i => ({
      maGhe: i.maGhe,
      giaVe: i.giaVe
    }));
    console.log(data);
  };
// enddd
  render() {
    console.log(this.props.userLogin);
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
              <div className="text-dark">
                <div className="content-booking">
                  <h5>Ghế đã chọn: </h5>
                  {this._renderBooking()}
                </div>
                <div className="content-booking">
                  <h5>Số lượng ghế đã chọn: </h5>
                  {this.state.chairsBooking.length}
                </div>
                <div className="content-booking">
                  <h5>Tổng tiền: </h5>
                  {this._sumMoney()}
                </div>
              </div>
              {this.state.chairsBooking.length > 0 ? (
                <button
                  className="btn btn-warning w-100"
                  onClick={this._onClickPriceSticker}
                >
                  Đặt vé
                </button>
              ) : (
                ""
              )}
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
        console.log("Api trả về chi tiếc lịch chiếu phim: ", data);
        this.setState({
          chairs: data.danhSachGhe,
          info: data.thongTinPhim
        });
      });
    }
  }
}

const mapStateToProps = state => {
  return {
    userLogin: state.user.userLogin
  };
};

export default connect(mapStateToProps, null)(BookingCpm);
