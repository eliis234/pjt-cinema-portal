import React, { Component } from 'react'

export default class FilmDetail extends Component {
    render() {
        return (
       <div>
  <div className="detail-trailer">
    <img className="detail-background" alt="detail img" />
    <div className="detail-trailer-bg" />
    <img className="play-video" src="img/play-video.png" alt="text" data-toggle="modal" data-target="#movieDetailTrailer" />
    <div className="border-play-video" /></div>
  <div className="row detail-desc">
    <div className="col-sm-12 col-xs-12">
      <div className="detail-review">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
            <div className="detail-review-img">
              <img alt=""/>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 right-col">
            <div className="detail-reivew-des">
              <div className="detail-title">
                <h2>movie.TenPhim</h2>
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
                    <span>Ngày phát hành <label>:</label></span><a href>{'{'}{'{'}
                      movie.NgayKhoiChieu | date: "dd-MM-yyyy"
                      {'}'}{'}'}</a>
                  </li>
                  <li>
                    <span>Đạo diễn <label>:</label></span><a href>Priti kapel, Justin orjun</a>
                  </li>
                  <li>
                    <span>Diễn viên <label>:</label></span><a href>Charlotte Vega, Patrick Wilson</a>
                  </li>
                  <li>
                    <span>Thể loại <label>:</label></span><a href>kinh dị</a>
                  </li>
                  <li>
                    <span>Định dạng <label>:</label></span><a href>2D / Digital / 4DX</a>
                  </li>
                  <li>
                    <span>Quốc gia SX <label>:</label></span><a href>Mỹ</a>
                  </li>
                </ul>
              </div>
              <div className="detail-social-link">
                <strong>Share</strong>
                <a href className="social-fb"><span className="fa fa-facebook" /></a>
                <a href className="social-tw"><span className="fa fa-twitter" /></a>
                <a href className="social-sk"><span className="fa fa-skype" /></a>
                <a href className="social-pin"><span className="fa fa-pinterest" /></a>
                <a href className="social-ins"><span className="fa fa-instagram" /></a>
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
          {/* TODO */}
          {/* <iframe 
            width="100%" 
            height="100%" 
            frameBorder={0} 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          /> */}
        </div>
        <button title="Close (Esc)" type="button" className="modal-close" data-dismiss="modal">
          <i className="fa fa-times" />
        </button>
      </div>
    </div>
  </div>
  <div className="detail-content">
  <div className="row">
    <div className="col-sm-12 col-xs-12">
      {/* Nav lịch chiếu - thông tin - bình luận */}
      <ul className="nav nav-pills nav-center">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="pill" href="#LichChieu">Lịch chiếu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#ThongTin">Thông tin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#BinhLuan">Bình luận</a>
        </li>
      </ul>
      {/* content lịch chiếu - thông tin - bình luận */}
      <div className="tab-content">
        {/* nav lịch chiếu */}
        <div className="tab-pane active" id="LichChieu">
          <ul className="nav nav-pills nav-center nav-rap">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#CGV">
                <img src="/img/rapBHD.png" alt="size img" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#BHD">
                <img className="logo-circle" src="/img/rapGALA.png" alt="size img" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#LOTTE">
                <img className="logo-circle" src="/img/rapLOTE.png" alt="size img" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#SAO">
                <img className="logo-circle" src="/img/rapSAO.png" alt="size img" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#TOUCH">
                <img className="logo-circle" src="/img/doitac3.png" alt="size img" />
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
                        <a className="nav-link active" data-toggle="pill" href="#CGVSuVanHanh">
                          <div className="item-rap">                                           
                            <div className="rap-img">
                              <img src="/img/cgv-su-van-hanh.jpg" alt="size img" />
                            </div>
                            <div className="rap-dia-chi">
                              <h5><span>CGV</span> - Sư Vạn Hạnh</h5>
                              <p>Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10</p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#CGVThuDuc">
                          <div className="item-rap">                                           
                            <div className="rap-img">
                              <img src="/img/cgv-su-van-hanh.jpg" alt="size img" />
                            </div>
                            <div className="rap-dia-chi">
                              <h5><span>CGV</span> - Thủ Đức</h5>
                              <p>Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10</p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#CGVDongKhoi">
                          <div className="item-rap">
                            <div className="rap-img">
                              <img src="/img/cgv-su-van-hanh.jpg" alt="size img" />
                            </div>
                            <div className="rap-dia-chi">
                              <h5><span>CGV</span> - Đồng Khởi</h5>
                              <p>Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10</p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>                                                                                                                                            
                  </div>
                  <div className="col-sm-7 rap-ngay-chieu">
                    <div className="tab-content">
                      <div className="tab-pane container active" id="CGVSuVanHanh">  
                        <ul className="nav nav-pills nav-center list-ngay-chieu">
                          <ng-container>
                            <li className="nav-item">
                              <a className="nav-link  ngay-chieu" data-toggle="pill">{'{'}{'{'}item1.NgayChieuGioChieu | date: "dd/MM"{'}'}{'}'}</a>
                            </li>
                          </ng-container>
                        </ul>
                        {/* <ng-template > */}
                        <div className="tab-content content-ngay-chieu">
                          <div className="tab-pane container active lich-chieu">
                            <div className="item-lich-chieu">
                              <div className="lich-chieu-des">
                                <div className="lich-chieu-img">
                                  <img alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span>{'{'}{'{'}movie.TenPhim{'}'}{'}'}</h5>
                                  <p>120p - IMDb 7.9</p>
                                </div>
                              </div>
                              <div className="lich-chieu-gio">
                                <div className="dinh-dang">
                                  <span>2D</span>
                                </div>
                                <div className="gio-chieu">
                                  <a>{'{'}{'{'}gioChieu | date: "hh:mm"{'}'}{'}'}</a>
                                </div>
                              </div>
                            </div>
                          </div> 
                        </div>
                      </div>
                      <div className="tab-pane container fade" id="CGVThuDuc">  
                        <ul className="nav nav-pills nav-center list-ngay-chieu">
                          <li className="nav-item">
                            <a className="nav-link active ngay-chieu" data-toggle="pill" href="#HomNay1">1/8</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link ngay-chieu" data-toggle="pill" href="#NgayMai1">2/8</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link ngay-chieu" data-toggle="pill" href="#NgayMot">3/8</a>
                          </li>
                        </ul>
                        <div className="tab-content content-ngay-chieu">
                          <div className="tab-pane container active lich-chieu" id="HomNay1">
                            <div className="item-lich-chieu">
                              <div className="lich-chieu-des">
                                <div className="lich-chieu-img">
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Super man</h5>
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
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Super man</h5>
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
                          <div className="tab-pane container fade lich-chieu" id="NgayMai1">
                            <div className="item-lich-chieu">
                              <div className="lich-chieu-des">
                                <div className="lich-chieu-img">
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Spider man</h5>
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
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Spider man</h5>
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
                      <div className="tab-pane container fade" id="CGVDongKhoi">  
                        <ul className="nav nav-pills nav-center list-ngay-chieu">
                          <li className="nav-item">
                            <a className="nav-link active ngay-chieu" data-toggle="pill" href="#HomNay2">1/8</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link ngay-chieu" data-toggle="pill" href="#NgayMai2">2/8</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link ngay-chieu" data-toggle="pill" href="#NgayMot">3/8</a>
                          </li>
                        </ul>
                        <div className="tab-content content-ngay-chieu">
                          <div className="tab-pane container active lich-chieu" id="HomNay2">
                            <div className="item-lich-chieu">
                              <div className="lich-chieu-des">
                                <div className="lich-chieu-img">
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Annabelle</h5>
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
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Annabelle</h5>
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
                          <div className="tab-pane container fade lich-chieu" id="NgayMai2">
                            <div className="item-lich-chieu">
                              <div className="lich-chieu-des">
                                <div className="lich-chieu-img">
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Thor</h5>
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
                                  <img src="/img/aladdin.jpg" alt="size img" />
                                </div>
                                <div className="lich-chieu-phim">
                                  <h5><span>13</span> Thor</h5>
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
            <p>{'{'}{'{'}movie.MoTa{'}'}{'}'}</p>
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
                <img alt="img" />
                <span className="news-date">{'{'}{'{'}item.release{'}'}{'}'}</span>
              </div>
              <a className="news-title" href="/">
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
                <img alt="img" />
              </div>
              <a className="news-title" href="/">
                <p className="mt-3">{'{'}{'{'}item.title{'}'}{'}'}</p>
              </a>
              <p className="news-content">{'{'}{'{'}item.content{'}'}{'}'}</p>
              <div className="blockIcon">
                <i className="fa fa-thumbs-up" /><span className="ml-2">{'{'}{'{'}item.like{'}'}{'}'}</span>
                <i className="fa fa-comment ml-4" /><span className="ml-2">0</span>
              </div>
            </div>
            <div className="col-md-4 p-0">
              <div className="news-item">
                <a><img alt="img" /></a>
                <p className="news-item_title">{'{'}{'{'}item.title{'}'}{'}'}</p>
              </div>
            </div>
          </div>
        </div>
        {/* end nav thông tin */}
        <div className="tab-pane container fade" id="BinhLuan">    
          <app-detail-comment />
        </div>
      </div>                  
    </div>
  </div>
</div>

</div>
        )
    }
}
