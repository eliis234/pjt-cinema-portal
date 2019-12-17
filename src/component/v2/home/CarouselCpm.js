import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "./styles/carousel.scss";

export default class CarouselCpm extends Component {
  render() {
    const options = {
      items: 1,
      nav: true,
      rewind: true,
      autoplay: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ],
    };

    const events = {
      onDragged: function(event) {},
      onChanged: function(event) {}
    };
    return (
      <section className="carousel-cpm ">
        <div className="carousel-booking">
          <OwlCarousel ref="car" options={options} events={events}>
            <div>
              <img src="/img/images/carousel/carousel1.jpg" alt="The Last" />
            </div>
            <div>
              <img src="/img/images/carousel/carousel2.jpg" alt="GTA V" />
            </div>
            <div>
              <img src="/img/images/carousel/carousel3.jpg" alt="Mirror Edge" />
            </div>
          </OwlCarousel>
          <div className="booking-ticket">
            <div className="row m-0">
              <div className="col-sm-6 col-md-4">
                <select id="selectMovie" className="form-control">
                  <option selected>Phim</option>
                  <option>item.TenPhim</option>
                </select>
              </div>
              <div className="col-sm-6 col-md-2">
                <select id="selectCinema" className="form-control">
                  <option selected>Rạp</option>
                  <option>item.TenRap</option>
                </select>
              </div>
              <div className="col-sm-6 col-md-2">
                <select id="selectDate" className="form-control">
                  <option selected>Ngày</option>
                  <option>item.NgayChieuGioChieu | date: "dd/MM/yyyy"</option>
                </select>
              </div>
              <div className="col-sm-6 col-md-2">
                <select id="selectTime" className="form-control">
                  <option selected>Giờ</option>
                  <option>item.NgayChieuGioChieu | date: "hh:mm"</option>
                </select>
              </div>
              <div className="col-sm-12 col-md-2">
                <button className="btn-booking btn">Đặt vé</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
