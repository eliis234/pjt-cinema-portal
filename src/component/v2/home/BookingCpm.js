import React, { Component } from 'react';

class BookingCpm extends Component {
  render() {
    return (
      <div>
        <div className="choose-chair">
    <div className="col-md-12 choose-chair_top">
      <div className="row">
        <div className="col-md-6 d-flex left_title">
          <div className="logocinema">
            <img className="logo" src="../../../assets/images/rapBHD.png" />
          </div>
          <div className="contentcinema">
            <p className="address m-0">
              <span className="pcinema" style={{color:"#8bc541"}}>BHD Star</span>
              <span className="cinemaname"> - Vincom 3/2</span>
            </p>
            {/* <ng-container *ngFor="let item of movie.LichChieu | slice: 0:1">
              <p className="hour m-0">
                {{ item.NgayChieuGioChieu | date: "hh:mm" }} - {{item.Rap.TenRap}}
              </p>
            </ng-container> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className="righttitle">
            <p className="info1 m-0">thời gian giữ ghế</p>
            <p className="info2 m-0">
              {/* <span className="minute">0{{ minutes }}:{{ seconds }} </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 choose-chair_bottom">
      <div className="room">
        <div className="screen text-center">
          <img src="../../../assets/images/screen.png" alt="" />
        </div>
        <div className="list_chair">
          {/* <ng-container *ngFor="let item of mangGhe; let index = index">
            <app-item-seat
              [ghe]="item"
              (eventGhe)="chonGhe($event)"
            ></app-item-seat>
            <br *ngIf="(index + 1) % 9 === 0" />
          </ng-container> */}
        </div>
      </div>
    </div>
    <div className="typeseats">
      <div className="row">
        <div className="col-md-12 text-center typeseats-box">
          <span className="typeseat">
            <span className="colorseat colornull"></span>
            <span className="nameseat">Ghế trống</span>
          </span>
          <span className="typeseat">
            <span className="colorseat colorchoosing"></span>
            <span className="nameseat">Đang chọn</span>
          </span>
          <span className="typeseat">
            <span className="colorseat colorchosen"></span>
            <span className="nameseat">Đã chọn</span>
          </span>
          <span className="typeseat">
            <span className="colorseat colornever"></span>
            <span className="nameseat">Không thể chọn</span>
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* // <div className="modal fade" id="myModal" data-backdrop="static">
  //   <div className="modal-dialog">
  //     <div className="modal-content">
  //       <div className="modal-body">
  //         Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5
  //         phút. <a (click)="chuyenTrang()">Đặt vé lại</a> */}
  {/* //       </div> */}
  //     </div>
  //   </div>
  // </div>
      // </div>
    );
  }
}

export default BookingCpm;