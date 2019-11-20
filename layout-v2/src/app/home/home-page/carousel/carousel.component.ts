import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/_core/share/share-data.service';
import $ from "jquery";
declare var $:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  IdMovie: any;
  listMovie: any = [];
  listLichChieu: any = [];
  listRap: any = [];
  ngayChieu: any = [];
  gioChieu: any = [];
  maLichChieu: any;
  carouselImg: any = [
    "../../../../assets/images/carousel/carousel5.jpg",
    "../../../../assets/images/carousel/carousel2.jpg",
    "../../../../assets/images/carousel/carousel4.png",
    "../../../../assets/images/carousel/carousel3.jpg",
    "../../../../assets/images/carousel/carousel1.jpg"
  ];

  constructor(private dataService: DataService, private router: Router, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.getListMovie();    
  }

  choosingMovie(movie){
    movie = $("#selectMovie option:selected").val();
    this.listMovie.map((item) =>{
      if(movie === item.TenPhim){
        this.IdMovie = item.MaPhim;
        this.getdetailMovie();
      }
    })
     
    this.listRap.splice(0); 
    this.ngayChieu.splice(0);
    this.gioChieu.splice(0);
  }

  choosingDate(date){   
    // lấy vị trí của ngày được chọn
    let indexSelected = $("#selectDate option:selected").index();
    // lặp, nếu vị trí được chọn = vị trí trong mảng ngày chiếu giờ chiếu, gán giá trị của vị trí đó cho biến date
    this.ngayChieu.forEach((item, index) => {
      if(index === (indexSelected - 1)){
        date = item.NgayChieuGioChieu;
        if(indexSelected === index){
          this.gioChieu.push(item);
        }
        else{
          if(indexSelected !== index){
            this.gioChieu.splice(0);
            this.gioChieu.push(item);
          }
        }
        this.maLichChieu = item.MaLichChieu;
      }
    });   
    this.listLichChieu.map((item) => {
      if(date === item.NgayChieuGioChieu){
        this.maLichChieu = item.MaLichChieu;
      }
    })
  }

  choosingCinema(){
    let selectMovie = $("#selectCinema option:selected").index();
    if(selectMovie !== 0){
      this.listLichChieu.map((item) => {
        let ngayGioChieu: {NgayChieuGioChieu: string} = {
          NgayChieuGioChieu: item.NgayChieuGioChieu,
        };
        this.ngayChieu.push(ngayGioChieu);  
      })
    }
  }

  bookingTicket(){
    let selectMovie = $("#selectMovie option:selected").index();
    let selectTime = $("#selectTime option:selected").index();
    if(selectMovie !== 0 && selectTime !== 0){      
      if(this.maLichChieu){
        this.router.navigate(["booking", this.maLichChieu]);
      }
    } 
  }

  getdetailMovie(){    
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.IdMovie}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.listLichChieu = data.LichChieu;
      
      // load tên rạp, nếu tên rạp bị trùng thì không thêm vào mảng nữa
      this.listLichChieu.map((item) => {
        let tenRap: {TenRap: string} = {
          TenRap: item.Rap.TenRap
        };
        if(this.listRap.length === 0){
          this.listRap.push(tenRap);
        }
        if(this.listRap.length >= 1){
          for(let i=0, length = this.listRap.length; i < length; i++){
            if(this.listRap[i].TenRap !== item.Rap.TenRap){
              this.listRap.push(tenRap);
            }
          }
        }  
      })
      // load ngày chiếu
      this.choosingCinema();      
    })    
  }

  getListMovie(){
    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP07`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.listMovie = data;   
      this.shareDataService.sharingMovieShowingTrailer(this.listMovie);
    })
  }
}
