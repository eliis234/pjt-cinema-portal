import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/_core/services/data.service";
import { ShareDataService } from "src/app/_core/share/share-data.service";

@Component({
  selector: "app-detail-content",
  templateUrl: "./detail-content.component.html",
  styleUrls: ["./detail-content.component.scss"]
})
export class DetailContentComponent implements OnInit {
  id: any;
  tenPhim: string;
  movie: any;
  gioChieu: any = [];
  maLichChieu: any;

  news: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private shareDataService: ShareDataService
  ) {}

  ngOnInit() {
    this.getParamsFromURL();
    this.chiTietPhim();
    this.news = JSON.parse(localStorage.getItem("news"));
  }

  getParamsFromURL() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  chiTietPhim() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.movie = data;

      this.getLichChieu();

      this.shareDataService.sharingMovieBooking(this.movie);
    });
  }

  getLichChieu() {
    this.movie.LichChieu.map((item, index) => {
      if (index === 0) {
        this.gioChieu = item.NgayChieuGioChieu;
        this.maLichChieu = item.MaLichChieu;
      }
    });
  }

  getNgayChieu(maLichChieu, date) {
    this.gioChieu = date;
    this.maLichChieu = maLichChieu;
  }

  datVe(maLichChieu) {
    this.router.navigate(["booking", maLichChieu]);
  }

  chooseNews(id){
    this.router.navigate(["/news", id]);
  }
}
