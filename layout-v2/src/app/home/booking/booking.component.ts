import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/_core/services/data.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  maLichChieu: string;

  danhsachGheNgoi: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getParamsFromURL();
    this.layChiTietPhongVe();
  }

  getParamsFromURL() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("id");
  }

  layChiTietPhongVe() {
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.danhsachGheNgoi = data.DanhSachGhe;
    });
  }
}
