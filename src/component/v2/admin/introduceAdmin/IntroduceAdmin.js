import React, { Component } from 'react';
import '../style/introduceAdmin.scss'

class IntroduceAdmin extends Component {
  render() {
    return (
      <div class="introduce">
        <div class="title__introduce">
          <h3>Giới thiệu TMN</h3>
        </div>
        <div class="content__introduce">
          <div class="row">
            <div class="col-md-7">
              <p>
                <b>CJ TMN</b> là một trong top 5 cụm rạp chiếu phim lớn nhất toàn cầu
                và là nhà phát hành, cụm rạp chiếu phim lớn nhất Việt Nam.Mục tiêu của
                chúng tôi là trở thành hình mẫu công ty điển hình đóng góp cho sự phát
                triển không ngừng của ngành công nghiệp điện ảnh Việt Nam.
        </p>
              <p>
                <b>CJ TMN</b> đã tạo nên khái niệm độc đáo về việc chuyển đổi rạp
                chiếu phim truyền thống thành tổ hợp văn hóa “Cultureplex”, nơi khán
                giả không chỉ đến thưởng thức điện ảnh đa dạng thông qua các công nghệ
                tiên tiến như SCREENX, IMAX, STARIUM, 4DX, Dolby Atmos, cũng như
                thưởng thức ẩm thực hoàn toàn mới và khác biệt trong khi trải nghiệm
                dịch vụ chất lượng nhất tại CGV.
        </p>
              <p>
                <b>CJ TMN</b> Việt Nam sẽ tiếp tục cuộc hành trình bền bỉ trong việc
                góp phần xây dựng một nền công nghiệp điện ảnh Việt Nam ngày càng vững
                mạnh hơn cùng các khách hàng tiềm năng, các nhà làm phim, các đối tác
                kinh doanh uy tín, và cùng toàn thể xã hội.
        </p>
            </div>
            <div class="col-md-5 image__introduce">
              <ul>
                <li>
                  <img src="/img/images/introduce1.png" alt="#" />
                </li>
                <li>
                  <img src="/img/images/introduce2.png" alt="#" />
                </li>
                <li>
                  <img src="/img/images/introduce3.png" alt="#" />
                </li>
                <li>
                  <img src="/img/images/introduce4.png" alt="#" />
                </li>
                <li>
                  <img src="/img/images/introduce5.png" alt="#" />
                </li>
                <li>
                  <img src="/img/images/introduc6.jpg" alt="#" />
                </li>
              </ul>
      </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroduceAdmin;