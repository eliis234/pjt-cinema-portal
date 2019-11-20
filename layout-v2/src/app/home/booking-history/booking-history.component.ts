import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/_core/services/data.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";

export class GheDaDat {
  id: any;
  MaGhe: any;
  TenPhim: any;
  GiaVe: any;
  NgayDat: any;
  Rap: any;
}

@Component({
  selector: "app-booking-history",
  templateUrl: "./booking-history.component.html",
  styleUrls: ["./booking-history.component.scss"]
})
export class BookingHistoryComponent implements OnInit {
  gheDaDat = new GheDaDat();

  displayedColumns: string[] = ["id", "TenPhim", "GiaVe", "NgayDat", "Rap"];

  dataSource = new MatTableDataSource<GheDaDat>();

  selection = new SelectionModel<GheDaDat>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  nguoiDung: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.nguoiDung = JSON.parse(localStorage.getItem("userLogin"));
    this.lichSuDatVe();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  lichSuDatVe() {
    if (this.nguoiDung) {
      const uri = `QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${
        this.nguoiDung.TaiKhoan
      }`;
      this.dataService.post(uri).subscribe((data: any) => {
        this.dataSource.data = data.DanhSachVeDaDat;
      });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
