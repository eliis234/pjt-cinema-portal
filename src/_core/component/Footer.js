import React, { Component } from "react";
import "./styles/Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footertop-bg">
          <div className="container">
            <div className="row footer">
              <div className="col-md-3 footerInfo">
                <div className="footerLogo">
                  <a href>
                    <img src="/img/images/logo6.png" alt="size img" />
                  </a>
                </div>
                <p>
                  MovieStar giúp bạn mua vé trực tuyến và cập nhật thướng xuyên
                  các thông tin như trailer, tin tức thông tin rạp, suất chiếu,
                  ... Mong muốn mang đến những trải nghiệm tốt nhất cho khách
                  hàng.
                </p>
              </div>
              <div className="col-md-3">
                <div className="footer-title">
                  <p>Về chúng tôi</p>
                </div>
                <div className="footer-content">
                  <a href>
                    <p>Giới thiệu</p>
                  </a>
                  <a href>
                    <p>Lịch chiếu</p>
                  </a>
                  <a href>
                    <p>Cụm rạp</p>
                  </a>
                  <a href>
                    <p>Tin tức</p>
                  </a>
                  <a href>
                    <p>Đăng nhập</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-title">
                  <p>Hỗ trợ khách hàng</p>
                </div>
                <div className="footer-content">
                  <a href="http://example.com">
                    <p>Liên Hệ</p>
                  </a>
                  <a href="http://example.com">
                    <p>Chính sách bảo mật</p>
                  </a>
                  <a href="http://example.com">
                    <p>Quy chế hoạt động</p>
                  </a>
                  <a href="http://example.com">
                    <p>Quyền lợi thành viên</p>
                  </a>
                  <a href="http://example.com">
                    <p>Câu hỏi thường gặp</p>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-title">
                  <p>Đối tác</p>
                </div>
                <div className="row">
                  <div className="col-md-12 footer-doitac">
                    <a href="https://www.bhdstar.vn/">
                      <img src="/img/images/rapBHD.png" alt="size img" />
                    </a>
                    <a href="https://www.galaxycine.vn/">
                      <img src="/img/images/rapGALA.png" alt="size img" />
                    </a>
                    <a href="http://lottecinemavn.com/LCHS/index.aspx#">
                      <img src="/img/images/rapLOTE.png" alt="size img" />
                    </a>
                    <a href="https://cinestar.com.vn/">
                      <img src="/img/images/rapSAO.png" alt="size img" />
                    </a>
                    <a href="https://www.betacineplex.vn/home.htm">
                      <img src="/img/images/doitac1.jpg" alt="size img" />
                    </a>
                    <a href="http://ddcinema.vn/">
                      <img src="/img/images/doitac2.png" alt="size img" />
                    </a>
                    <a href="https://touchcinema.com/">
                      <img src="/img/images/doitac3.png" alt="size img" />
                    </a>
                    <a href="https://cinemaxvn.com/">
                      <img src="/img/images/doitac4.jpg" alt="size img" />
                    </a>
                    <a href="https://starlight.vn/">
                      <img src="/img/images/doitac5.png" alt="size img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbottom-bg">
          <div className="container">
            <div className="row footerbottom">
              <div className="col-md-10 d-flex">
                <div className="footerbottom_logo">
                  <img src="/img/images/favicon.png" alt="size img" />
                </div>
                <div className="footerbottom-content">
                  <p>
                    MOVIESTAR – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION – MỘT THÀNH
                    VIÊN CỦA CÔNG TY CỔ PHẦN VNG
                  </p>
                  <p>
                    Địa chỉ: 52 Nguyễn Ngọc Lộc, Phường 14, Quận 10, Thành phố
                    Hồ Chí Minh
                  </p>
                  <p>Mã số thuế: 01012584899</p>
                </div>
              </div>
              <div className="col-md-2 logoCongThuong">
                <img src="/img/images/logoCongThuong.png" alt="size img" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
