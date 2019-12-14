import React, { Component } from "react";
import './style/GlobalCenimasDetail.scss';

export default class GlobalCenimasDetailCpm extends Component {
  render() {
    return (
      <div className="cm-global-cenima-cpm">
        <div className="detail-content">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              {/* Nav lịch chiếu - thông tin - bình luận */}
              <ul className="nav nav-pills nav-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#LichChieu"
                  >
                    Lịch chiếu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#ThongTin">
                    Thông tin
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#BinhLuan">
                    Bình luận
                  </a>
                </li>
              </ul>
              {/* content lịch chiếu - thông tin - bình luận */}
              <div className="tab-content">
                {/* nav lịch chiếu */}
                <div className="tab-pane active" id="LichChieu">
                  <ul className="nav nav-pills nav-center nav-rap">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#CGV"
                      >
                        <img src="/img/images/rapBHD.png" alt="img-defalt" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#BHD">
                        <img
                          className="logo-circle"
                          src="/img/images/rapGALA.png"
                          alt="img-defalt"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#LOTTE">
                        <img
                          className="logo-circle"
                          src="/img/images/rapLOTE.png"
                          alt="img-defalt"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#SAO">
                        <img
                          className="logo-circle"
                          src="/img/images/rapSAO.png"
                          alt="img-defalt"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="pill" href="#TOUCH">
                        <img
                          className="logo-circle"
                          src="/img/images/doitac3.png"
                          alt="img-defalt"
                        />
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content content-lich-chieu">
                    <div className="tab-pane active" id="CGV">
                      <div className="detail-lich-chieu">
                        <div className="row">
                          <div className="col-md-5 rap">
                            <ul className="nav nav-pills nav-center nav-lich-chieu">
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  data-toggle="pill"
                                  href="#CGVSuVanHanh"
                                >
                                  <div className="item-rap">
                                    <div className="rap-img">
                                      <img
                                        src="/img/images/cgv-su-van-hanh.jpg"
                                        alt="img-defalt"
                                      />
                                    </div>
                                    <div className="rap-dia-chi">
                                      <h5>
                                        <span>CGV</span> - Sư Vạn Hạnh
                                      </h5>
                                      <p>
                                        Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh,
                                        Quận 10
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="pill"
                                  href="#CGVThuDuc"
                                >
                                  <div className="item-rap">
                                    <div className="rap-img">
                                      <img
                                        src="/img/images/cgv-su-van-hanh.jpg"
                                        alt="img-defalt"
                                      />
                                    </div>
                                    <div className="rap-dia-chi">
                                      <h5>
                                        <span>CGV</span> - Thủ Đức
                                      </h5>
                                      <p>
                                        Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh,
                                        Quận 10
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="pill"
                                  href="#CGVDongKhoi"
                                >
                                  <div className="item-rap">
                                    <div className="rap-img">
                                      <img
                                        src="/img/images/cgv-su-van-hanh.jpg"
                                        alt="img-defalt"
                                      />
                                    </div>
                                    <div className="rap-dia-chi">
                                      <h5>
                                        <span>CGV</span> - Đồng Khởi
                                      </h5>
                                      <p>
                                        Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh,
                                        Quận 10
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-7 rap-ngay-chieu">
                            <div className="tab-content">
                              <div
                                className="tab-pane container active"
                                id="CGVSuVanHanh"
                              >
                                <ul className="nav nav-pills nav-center list-ngay-chieu">
                                  {/* TODO */}
                                  {/* <ng-container *ngif="movie">
                              <li className="nav-item" *ngfor="let item1 of movie.LichChieu ; let index = index">
                                <a className="nav-link  ngay-chieu" data-toggle="pill" [ngclass]="{active: index === 0}" (click)="getNgayChieu(item1.MaLichChieu, item1.NgayChieuGioChieu)">item1.NgayChieuGioChieu | date: "dd/MM"</a>
                              </li>
                            </ng-container> */}
                                </ul>
                                {/* <ng-template #lichChieu1> */}
                                <div className="tab-content content-ngay-chieu">
                                  <div className="tab-pane container active lich-chieu">
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="movie.HinhAnh"
                                            alt="movie.HinhAnh"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span>movie.TenPhim
                                          </h5>
                                          <p>120p - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href="abc.avx">
                                            gioChieu | date: "hh:mm"
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane container fade"
                                id="CGVThuDuc"
                              >
                                <ul className="nav nav-pills nav-center list-ngay-chieu">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active ngay-chieu"
                                      data-toggle="pill"
                                      href="#HomNay1"
                                    >
                                      1/8
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link ngay-chieu"
                                      data-toggle="pill"
                                      href="#NgayMai1"
                                    >
                                      2/8
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link ngay-chieu"
                                      data-toggle="pill"
                                      href="#NgayMot"
                                    >
                                      3/8
                                    </a>
                                  </li>
                                </ul>
                                <div className="tab-content content-ngay-chieu">
                                  <div
                                    className="tab-pane container active lich-chieu"
                                    id="HomNay1"
                                  >
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img-defalt"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Super man
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img-defalt"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Super man
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane container fade lich-chieu"
                                    id="NgayMai1"
                                  >
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img-defalt"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Spider man
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img-defalt"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Spider man
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane container fade"
                                id="CGVDongKhoi"
                              >
                                <ul className="nav nav-pills nav-center list-ngay-chieu">
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active ngay-chieu"
                                      data-toggle="pill"
                                      href="#HomNay2"
                                    >
                                      1/8
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link ngay-chieu"
                                      data-toggle="pill"
                                      href="#NgayMai2"
                                    >
                                      2/8
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link ngay-chieu"
                                      data-toggle="pill"
                                      href="#NgayMot"
                                    >
                                      3/8
                                    </a>
                                  </li>
                                </ul>
                                <div className="tab-content content-ngay-chieu">
                                  <div
                                    className="tab-pane container active lich-chieu"
                                    id="HomNay2"
                                  >
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img-defalt"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Annabelle
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img-defalt"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Annabelle
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane container fade lich-chieu"
                                    id="NgayMai2"
                                  >
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img-defalt"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Thor
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-lich-chieu">
                                      <div className="lich-chieu-des">
                                        <div className="lich-chieu-img">
                                          <img
                                            src="/img/images/aladdin.jpg"
                                            alt="img"
                                          />
                                        </div>
                                        <div className="lich-chieu-phim">
                                          <h5>
                                            <span>13</span> Thor
                                          </h5>
                                          <p>140 phút - IMDb 7.9</p>
                                        </div>
                                      </div>
                                      <div className="lich-chieu-gio">
                                        <div className="dinh-dang">
                                          <span>2D</span>
                                        </div>
                                        <div className="gio-chieu">
                                          <a href>10:00</a>
                                          <a href>13:00</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane container" id="BHD">
                      fasdgaerhadfga
                    </div>
                    <div className="tab-pane container" id="LOTTE">
                      fasdgaerhadfga
                    </div>
                  </div>
                </div>
                {/* nav thông tin */}
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
                {/* end nav thông tin */}
                <div className="tab-pane container fade" id="BinhLuan">
                  {/* <app-detail-comment [movie]="movie" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
