import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";
declare var $:any;

@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.scss']
})
export class DetailCommentComponent implements OnInit {

  @Input() movie;
  user: any;
  alert: any;

  rating:number;  
  // star: string;
  // itemId: any;
  // sao: any;
  // ratingStar: any;

  listComment = [
    {maPhim:107, taiKhoan: "bong5", noiDung: "tuyệt vời", danhGia: 4.5, thoiGian: ""},
    {maPhim:117, taiKhoan: "ThuThuy", noiDung: "Phim gì á, chưa hiểu vấn đề luôn. Chắc lên phường khiếu nại quá.", danhGia: 2, thoiGian: ""},
    {maPhim:127, taiKhoan: "ThuyThu", noiDung: "Sao không cho nam chính chết quách luôn đi ^^. Kết xàm vãi.", danhGia: 3, thoiGian: ""},
  ];

  listCommentMovie = [];

  countComment: any;

  commentEditing = {maPhim:0 , taiKhoan: "", noiDung: "", danhGia: 0, thoiGian: ""};
  
  constructor() { }

  ngOnInit() { 
    this.listComment = JSON.parse(localStorage.getItem("userComment"));
    console.log(this.listComment, "list comment");
    console.log(this.movie, "movie detail-content");
    
    if(this.listComment.length > 0){
      this.listComment.map(item => {
        if(item.maPhim === this.movie.MaPhim){
          this.listCommentMovie.push(item);
        }
      })
      console.log(this.listCommentMovie, "listCommentMovie");
      this.countComment = this.listCommentMovie.length;
    }
  }

  chonSao(rating) {
    this.rating = rating;
  }

  dangNhanXet(taiKhoan, noiDung, danhGia){
    if(!localStorage.getItem("userLogin")){
      this.alert = "Vui lòng đăng nhập !";
      $("#modalAlertComment").modal(); 
    }
    else{
      this.user = JSON.parse(localStorage.getItem("userLogin"));
      let date = new Date();
      
      // this.listCommentMovie.map(item => {
      //   if(this.commentEditing.taiKhoan === item.taiKhoan && this.commentEditing.thoiGian === item.thoiGian){
      //     this.user.noiDung = this.commentEditing.noiDung;
      //     this.user.thoiGian = date.toISOString();
      //     this.listCommentMovie.unshift(this.user);
      //     this.listComment.unshift(this.user);
      //     localStorage.setItem("userComment", JSON.stringify(this.listComment));
      //     $('#myModalComment').modal( 'hide' ).data( 'bs.modal', null );
      //   }
      // })
        
      taiKhoan = this.user.TaiKhoan; 
      danhGia = this.rating;
      noiDung = $("#noiDung").val();
      const objNhanXet={
        maPhim: this.movie.MaPhim,
        taiKhoan: taiKhoan,
        noiDung: noiDung,
        danhGia: danhGia,
        thoiGian: date.toISOString()
      };
      this.listCommentMovie.unshift(objNhanXet);
      this.listComment.unshift(objNhanXet);
      localStorage.setItem("userComment", JSON.stringify(this.listComment));
      $('#myModalComment').modal( 'hide' ).data( 'bs.modal', null );
    }  
  }

  // getUserComment(comment){
  //   this.user = JSON.parse(localStorage.getItem("userLogin"));
  //   console.log(comment);
  //   if(comment.taiKhoan === this.user.TaiKhoan){
  //     $('#myModalComment').modal();
  //     this.commentEditing.taiKhoan = comment.taiKhoan;
  //     this.commentEditing.thoiGian = comment.thoiGian;
  //     this.commentEditing.noiDung = comment.noiDung;
  //   }
  // }
}
