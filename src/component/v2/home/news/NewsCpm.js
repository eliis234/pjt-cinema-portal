import React, { Component } from "react";
import "./news.scss";

const news1 = [
  {
    id: 0,
    title: `100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho`,
    content: `Thắng giải Cành Cọ Vàng, tác phẩm nhận được tràng pháo tay dài tận 8 phút tại liên hoan phim quốc tế. Bộ phim thú vị và để lại nhiều ấn tượng.`,
    img: `/img/images/new-movie/news7.jpg`,
    like: 5,
    release: `12.08.2019`
  },
  {
    id: 1,
    title: `Trước Crawl, những hiểm hoạ cá sấu nào đáng xem nhất trên màn bạc điện ảnh?`,
    content: `Chủ đề "cá sấu ăn thịt" tuy đã quá quen thuộc với khán giả nhưng mỗi lần nhắc đến một trong những tác phẩm sau, hẳn ai cũng sẽ nổi da gà vì khoảnh khắc đáng sợ.`,
    img: "/img/images/new-movie/new1.jpg",
    like: 1,
    release: "13.08.2019"
  }
];
const news2 = [
  {
    id: 2,
    title: "Người tuyết Yeti chưa bao giờ dễ thương như thế trong Everest",
    content: `Sau Răng Sún, "chiến binh" người tuyết của DreamWorks liệu có mang đến ...`,
    img: "/img/images/new-movie/new2.jpg",
    like: 1,
    release: "14.08.2019"
  },
  {
    id: 3,
    title: "Godzilla và những điều bạn chưa biết (P2)",
    content: `Trước khi đại chiến diễn ra, cùng tìm hiểu mọi thông tin về Godzilla nào.`,
    img: "/img/images/new-movie/new3.jpg",
    like: 1,
    release: "15.08.2019"
  }
];

const news3 = [
  {
    id: 4,
    title: `4 cái tên nào sẽ mang đến bất ngờ cho khán giả 'nhí' vào nửa cuối năm 2019?`,
    content: "",
    img: "/img/images/new-movie/new4.jpg",
    like: 0,
    release: "16.08.2019"
  },
  {
    id: 5,
    title: `'Cô nàng cử tạ' sẽ làm gì để ngăn chặn nạn phát tán clip 'nóng' trong Phi Vụ Nữ Quyền?`,
    content: "",
    img: "/img/images/new-movie/new5.jpg",
    like: 0,
    release: "17.08.2019"
  },
  {
    id: 6,
    title: "Godzilla và những điều bạn chưa biết (P1)",
    content: "",
    img: "/img/images/new-movie/new6.jpg",
    like: 0,
    release: "18.08.2019"
  },
  {
    id: 7,
    title: `Lượm ngay 5 quả trứng Phục Sinh cực ý nghĩa trong Avengers: Endgame nào!`,
    content: "",
    img: `/img/images/news/luom-ngay-45-qua-trung-phuc-sinh-cuc-y-nghia-trong-avengers-endgame-nao.jpg`,
    like: 0,
    release: "13.08.2019"
  }
];

export default class GlobalCenimasCpm extends Component {
  render() {
    return (
      <div className="cm-news-cpm mt-5">
        <div className="container">
          <div className="row">
            {news1.map((item, index) => {
              return (
                <div className="col-md-6 news_bg" key={index}>
                  <div className="news-image">
                    <img src={item.img} alt="img" />
                    <span className="news-date">{item.release}</span>
                  </div>
                  <a className="news-title" href="example">
                    <p className="mt-3">{item.title}</p>
                  </a>
                  <p className="news-content">{item.content}</p>
                  <div className="blockIcon">
                    <i className="fa fa-thumbs-up" />
                    <span className="ml-2">{item.like}</span>
                    <i className="fa fa-comment ml-4" />
                    <span className="ml-2">0</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row mt-3">
            {news2.map((item, index) => {
              return (
                <div className="col-md-4 news_bg" key={index}>
                  <div className="news-image">
                    <img src={item.img} alt="img" />
                  </div>
                  <a className="news-title" href="example">
                    <p className="mt-3">{item.title}</p>
                  </a>
                  <p className="news-content">{item.content}</p>
                  <div className="blockIcon">
                    <i className="fa fa-thumbs-up" />
                    <span className="ml-2">{item.like}</span>
                    <i className="fa fa-comment ml-4" />
                    <span className="ml-2">0</span>
                  </div>
                </div>
              );
            })}
            <div className="col-md-4 p-0">
              {news3.map((item, index) => {
                return (
                  <div className="news-item" key={index}>
                    <a href="example">
                      <img src={item.img} alt="img" />
                    </a>
                    <p className="news-item_title">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
