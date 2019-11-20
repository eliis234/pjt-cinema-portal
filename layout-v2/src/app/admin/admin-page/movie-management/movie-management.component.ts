import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DataService } from "src/app/_core/services/data.service";
import { SelectionModel } from "@angular/cdk/collections";
import $ from "jquery";
declare var $: any;

export class ListMovie {
  id: any;
  MaPhim: any;
  TenPhim: any;
  MaNhom: any;
  Trailer: any;
  MoTa: any;
  HinhAnh: any;
  NgayKhoiChieu: any;
  DanhGia: any;
}

@Component({
  selector: "app-movie-management",
  templateUrl: "./movie-management.component.html",
  styleUrls: ["./movie-management.component.scss"]
})
export class MovieManagementComponent implements OnInit {
  alert: any;
  movie = new ListMovie();

  displayedColumns: string[] = [
    "id",
    "MaPhim",
    "TenPhim",
    "HinhAnh",
    "MaNhom",
    "Setting"
  ];

  dataSource = new MatTableDataSource<ListMovie>();

  selection = new SelectionModel<ListMovie>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  statusChangeForm: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getListMovie();

    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  changeEdit(row) {
    this.statusChangeForm = true;

    this.movie.MaPhim = row.MaPhim;
    this.movie.TenPhim = row.TenPhim;
    this.movie.MoTa = row.MoTa;
    this.movie.HinhAnh = row.HinhAnh;
    this.movie.MaNhom = row.MaNhom;
    this.movie.NgayKhoiChieu = row.NgayKhoiChieu;
    this.movie.Trailer = row.Trailer;
    this.movie.DanhGia = row.DanhGia;
  }

  changeAdd() {
    this.statusChangeForm = false;
  }

  insertMovie(insertForm) {
    const objMovie = {
      MaPhim: insertForm.MaPhim,
      TenPhim: insertForm.TenPhim,
      MaNhom: insertForm.MaNhom,
      MoTa: insertForm.MoTa,
      DanhGia: insertForm.DanhGia,
      HinhAnh: insertForm.HinhAnh,
      Trailer: insertForm.Trailer
    };

    const uri = "QuanLyPhim/ThemPhimMoi";
    this.dataService.post(uri, objMovie).subscribe((data: any) => {
      if (data === "Tài khoản đã tồn tại") {
        $("#modalFail").modal();
        this.alert = "Tài khoản đã tồn tại";
      } else {
        this.getListMovie();
        $("#modalFail").modal();
        $("#editMovieModal")
          .modal("hide")
          .data("bs.modal", null);
        this.alert = "Thêm phim thành công";
      }
    });
  }

  updateMovie(insertForm) {
    for (let i = 0; i < this.dataSource.data.length; i++) {
      if (this.dataSource.data[i].MaPhim === this.movie.MaPhim) {
        this.dataSource.data[i].TenPhim = insertForm.TenPhim;
        this.dataSource.data[i].MoTa = insertForm.MoTa;
        this.dataSource.data[i].HinhAnh = insertForm.HinhAnh;
        this.dataSource.data[i].MaNhom = insertForm.MaNhom;
        this.dataSource.data[i].NgayKhoiChieu = insertForm.NgayKhoiChieu;
        this.dataSource.data[i].Trailer = insertForm.Trailer;
        this.dataSource.data[i].DanhGia = insertForm.DanhGia;
        this.movie = this.dataSource.data[i];
      }
    }
    const uri = `QuanLyPhim/CapNhatPhim`;
    this.dataService.post(uri, this.movie).subscribe((data: any) => {
      $("#modalFail").modal();
      $("#editMovieModal")
        .modal("hide")
        .data("bs.modal", null);
      this.alert = "Cập nhật phim thành công";
    });
  }

  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP07";
    this.dataService.get(uri).subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  deleteMovie(movie) {
    const uri = `QuanLyPhim/XoaPhim?MaPhim=${movie.MaPhim}`;
    this.dataService.delete(uri, movie.MaPhim).subscribe((data: any) => {
      this.getListMovie();
      $("#modalFail").modal();
      this.alert = "Xóa phim thành công";
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
