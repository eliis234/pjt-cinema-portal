import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any = [
    {id: 0, title: "100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho", content: "Thắng giải Cành Cọ Vàng, tác phẩm nhận được tràng pháo tay dài tận 8 phút tại liên hoan phim quốc tế. Bộ phim thú vị và để lại nhiều ấn tượng.", img: "../../../../../../../assets/images/new-movie/news7.jpg", like: 5, release: "12.08.2019"},
    {id: 1, title: "Trước Crawl, những hiểm hoạ cá sấu nào đáng xem nhất trên màn bạc điện ảnh?", content: 'Chủ đề "cá sấu ăn thịt" tuy đã quá quen thuộc với khán giả nhưng mỗi lần nhắc đến một trong những tác phẩm sau, hẳn ai cũng sẽ nổi da gà vì khoảnh khắc đáng sợ.', img: "../../../../../../../assets/images/new-movie/new1.jpg", like: 1, release: "13.08.2019"},
    {id: 2, title: "Người tuyết Yeti chưa bao giờ dễ thương như thế trong Everest", content: 'Sau Răng Sún, "chiến binh" người tuyết của DreamWorks liệu có mang đến ...', img: "../../.../../../../../assets/images/new-movie/new2.jpg", like: 1, release: "14.08.2019"},
    {id: 3, title: "Godzilla và những điều bạn chưa biết (P2)", content: "Trước khi đại chiến diễn ra, cùng tìm hiểu mọi thông tin về Godzilla nào.", img: "../../../../../../../assets/images/new-movie/new3.jpg", like: 1, release: "15.08.2019"},
    {id: 4, title: "4 cái tên nào sẽ mang đến bất ngờ cho khán giả 'nhí' vào nửa cuối năm 2019?", content: "", img: "../../../../../../../assets/images/new-movie/new4.jpg", like: 0, release: "16.08.2019"},
    {id: 5, title: "'Cô nàng cử tạ' sẽ làm gì để ngăn chặn nạn phát tán clip 'nóng' trong Phi Vụ Nữ Quyền?", content: "", img: "../../../../../../../assets/images/new-movie/new5.jpg", like: 0, release: "17.08.2019"},
    {id: 6, title: "Godzilla và những điều bạn chưa biết (P1)", content: "", img: "../../../../../../../assets/images/new-movie/new6.jpg", like: 0, release: "18.08.2019"},
    {id: 7, title: "Lượm ngay 5 quả trứng Phục Sinh cực ý nghĩa trong Avengers: Endgame nào!", content: "", img: "../../../assets/images/news/luom-ngay-45-qua-trung-phuc-sinh-cuc-y-nghia-trong-avengers-endgame-nao.jpg", like: 0, release: "13.08.2019"}
  ];

  likes: any = [];

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.setItem("news", JSON.stringify(this.news));
    this.news = JSON.parse(localStorage.getItem("news"));
  }

  like(id){
    this.news.forEach(item => {
      if(item.id === id){
        item.like++;
      }
    });
    localStorage.setItem("news", JSON.stringify(this.news));
  }

  chooseNews(id){
    this.router.navigate(["/news", id]);
  }
}
