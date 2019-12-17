import React, { Component } from "react";
import "./styles/GlobalCenimasCpm.scss";

export default class GlobalCenimasCpm extends Component {
  render() {
    return (
      <section className="cm-global-cenimas-cpm">
        <div className="row">
          <div className="col-md-12 titleRap">
            <p>CỤM RẠP</p>
          </div>
          <div className="col-md-12 item-rap">
            {/* Nav tabs */}
            <ul className="nav nav-tabs all-rap">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">
                  <img src="/img/images/rapBHD.png" alt="img cenima" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu1">
                  <img src="/img/images/rapGALA.png" alt="img cenima" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu2">
                  <img src="/img/images/rapLOTE.png" alt="img cenima" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu3">
                  <img src="/img/images/rapSAO.png" alt="img cenima" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu4">
                  <img src="/img/images/doitac3.png" alt="img cenima" />
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content mt-5">
              <div className="tab-pane container active" id="home">
                <div className="row">
                  <div className="col-md-5 tong_rap">
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs flex-column chitiet-rap">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#home1"
                        >
                          <div className="diadiem-rap">
                            <img
                              src="/img/images/cinema/bhd-star-bitexco.jpg"
                              alt="#"
                            />
                            <div className="chitiet">
                              <p>
                                <span>BHD Star Cineplex</span> - Bitexco
                              </p>
                              <span className="chitiet_diachi">
                                L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#home2">
                          <div className="diadiem-rap">
                            <img
                              src="/img/images/cinema/bhd-star-vincom-thao-dien.jpg"
                              alt="#"
                            />
                            <div className="chitiet">
                              <p>
                                <span>BHD Star Cineplex</span> - Vincom Thảo
                                Điền
                              </p>
                              <span className="chitiet_diachi">
                                L5-Megamall, 159 XL Hà Nội, Q.2
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#home3">
                          <div className="diadiem-rap">
                            <img
                              src="/img/images/cinema/bhd-star-vincom-3-2.jpg"
                              alt="#"
                            />
                            <div className="chitiet">
                              <p>
                                <span>BHD Star Cineplex</span> - 3/2
                              </p>
                              <span className="chitiet_diachi">
                                L5-Vincom 3/2, 3C Đường 3/2, Q.10
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7 pl-5">
                    <div className="tab-content scroll-up" id="style-1">
                      <div className="tab-pane container active" id="home1">
                        <div className="col-md-12 p-0 all-movieInfo">
                          <div className="movieInfo">
                            <img
                              src="/img/images/cinema/vua-su-tu-the-lion-king.jpg"
                              alt="img cenima"
                            />
                            <div className="wrapInfo">
                              <p>
                                <span className="movieTitle">
                                  Vua Sư Tử - The Lion King
                                </span>
                              </p>
                              <p className="movie-detail_time">
                                118 phút - 123Phim 8.4 - IMDb 7.2
                              </p>
                            </div>
                          </div>
                          <div className="movieInfo-time">
                            <button className="btn btn-success movie2D">
                              2D
                            </button>
                            <a href="example.abc">11:05</a>
                            <a href="example.abc">13:35</a>
                            <a href="example.abc">20:00</a>
                            <a href="example.abc">22:20</a>
                          </div>
                        </div>
                        <div className="col-md-12 p-0 all-movieInfo">
                          <div className="movieInfo">
                            <img
                              src="/img/images/cinema/fast-furious-hobbs-shaw.jpg"
                              alt="img cenima"
                            />
                            <div className="wrapInfo">
                              <p>
                                <span className="movieTitle">
                                  Fast &amp; Furious: Hobbs &amp; Shaw{" "}
                                </span>
                              </p>
                              <p className="movie-detail_time">
                                141 phút - 123Phim 9.7 - IMDb 7.6
                              </p>
                            </div>
                          </div>
                          <div className="movieInfo-time">
                            <button className="btn btn-success movie2D">
                              2D
                            </button>
                            <a href="example.abc">10:15</a>
                            <a href="example.abc">11:50</a>
                            <a href="example.abc">13:25</a>
                            <a href="example.abc">15:20</a>
                            <a href="example.abc">17:50</a>
                          </div>
                        </div>
                        <div className="col-md-12 p-0 all-movieInfo">
                          <div className="movieInfo">
                            <img
                              src="/img/images/cinema/tim-chong-cho-me.jpg"
                              alt="img cenima"
                            />
                            <div className="wrapInfo">
                              <p>
                                <span className="movieTitle">
                                  Tìm Chồng Cho Mẹ{" "}
                                </span>
                              </p>
                              <p className="movie-detail_time">
                                112 phút - 123Phim 9.1 - IMDb 8
                              </p>
                            </div>
                          </div>
                          <div className="movieInfo-time">
                            <button className="btn btn-success movie2D">
                              2D
                            </button>
                            <a href="example.abc">12:50</a>
                            <a href="example.abc">17:00</a>
                            <a href="example.abc">23:55</a>
                          </div>
                        </div>
                        <div className="col-md-12 p-0 all-movieInfo">
                          <div className="movieInfo">
                            <img
                              src="/img/images/cinema/dieu-ba-me-khong-ke-romang.jpg"
                              alt="img cenima"
                            />
                            <div className="wrapInfo">
                              <p>
                                <span className="movieTitle">
                                  Điều Ba Mẹ Không Kể - Romang{" "}
                                </span>
                              </p>
                              <p className="movie-detail_time">
                                112 phút - 123Phim 9.1 - IMDb 8
                              </p>
                            </div>
                          </div>
                          <div className="movieInfo-time">
                            <button className="btn btn-success movie2D">
                              2D
                            </button>
                            <a href="example.abc">10:40</a>
                            <a href="example.abc">13:25</a>
                            <a href="example.abc">15:40</a>
                            <a href="example.abc">17:55</a>
                            <a href="example.abc">18:50</a>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="home2">
                        <div className="tab-pane container active" id="home1">
                          <div className="col-md-12 p-0 all-movieInfo">
                            <div className="movieInfo">
                              <img
                                src="/img/images/cinema/vua-su-tu-the-lion-king.jpg"
                                alt="img cenima"
                              />
                              <div className="wrapInfo">
                                <p>
                                  <span className="movieTitle">
                                    Vua Sư Tử - The Lion King
                                  </span>
                                </p>
                                <p className="movie-detail_time">
                                  118 phút - 123Phim 8.4 - IMDb 7.2
                                </p>
                              </div>
                            </div>
                            <div className="movieInfo-time">
                              <button className="btn btn-success movie2D">
                                2D
                              </button>
                              <a href="example.abc">11:05</a>
                              <a href="example.abc">13:35</a>
                              <a href="example.abc">20:00</a>
                              <a href="example.abc">22:20</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="home3">
                        <div className="tab-pane container active" id="home1">
                          <div className="col-md-12 p-0 all-movieInfo">
                            <div className="movieInfo">
                              <img
                                src="/img/images/cinema/vua-su-tu-the-lion-king.jpg"
                                alt="img cenima"
                              />
                              <div className="wrapInfo">
                                <p>
                                  <span className="movieTitle">
                                    Vua Sư Tử - The Lion King
                                  </span>
                                </p>
                                <p className="movie-detail_time">
                                  118 phút - 123Phim 8.4 - IMDb 7.2
                                </p>
                              </div>
                            </div>
                            <div className="movieInfo-time">
                              <button className="btn btn-success movie2D">
                                2D
                              </button>
                              <a href="example.abc">11:05</a>
                              <a href="example.abc">13:35</a>
                              <a href="example.abc">20:00</a>
                              <a href="example.abc">22:20</a>
                            </div>
                          </div>
                          <div className="col-md-12 p-0 all-movieInfo">
                            <div className="movieInfo">
                              <img
                                src="/img/images/cinema/fast-furious-hobbs-shaw.jpg"
                                alt="img cenima"
                              />
                              <div className="wrapInfo">
                                <p>
                                  <span className="movieTitle">
                                    Fast &amp; Furious: Hobbs &amp; Shaw{" "}
                                  </span>
                                </p>
                                <p className="movie-detail_time">
                                  141 phút - 123Phim 9.7 - IMDb 7.6
                                </p>
                              </div>
                            </div>
                            <div className="movieInfo-time">
                              <button className="btn btn-success movie2D">
                                2D
                              </button>
                              <a href="example.abc">10:15</a>
                              <a href="example.abc">11:50</a>
                              <a href="example.abc">13:25</a>
                              <a href="example.abc">15:20</a>
                              <a href="example.abc">17:50</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu1">
                ...
              </div>
              <div className="tab-pane container fade" id="menu2">
                ...
              </div>
              <div className="tab-pane container fade" id="menu3">
                ...
              </div>
              <div className="tab-pane container fade" id="menu4">
                ...
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
