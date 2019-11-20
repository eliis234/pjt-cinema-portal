import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/_core/services/data.service";
import { NgForm, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { ShareDataService } from "src/app/_core/share/share-data.service";
import { Router } from "@angular/router";
import $ from "jquery";
declare var $: any;

export class Movie {
  MaPhim: any;
  TenPhim: any;
  HinhAnh: any;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  options: Movie[] = [];
  filteredOptions: Observable<Movie[]>;

  @ViewChild("registerForm", { static: false }) registerForm: NgForm;

  alert: any;
  statusLogin: boolean = false;
  statusEdit: boolean = false;
  nguoiDung: any;
  listNguoiDung: any = [];

  constructor(
    private dataService: DataService,
    private shareDataService: ShareDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadListMovie();
    this.getListUser();
    this.getLogin();
    this.filterMovie();    
  }

  loadListMovie(){
    this.shareDataService.shareListMovie.subscribe((data: any) => {
      data.map(item => {
        let objMovie = {
          MaPhim: item.MaPhim,
          TenPhim: item.TenPhim,
          HinhAnh: item.HinhAnh
        };
        this.options.push(objMovie);
      });
    });
  }

  filterMovie(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(movie?: Movie): string | undefined {
    return movie ? movie.TenPhim : undefined;
  }

  search() {
    this.router.navigate(["detail", this.myControl.value.MaPhim]);
  }

  private _filter(name: string): Movie[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.TenPhim.toLowerCase().indexOf(filterValue) === 0);
  }

  dangNhap(loginForm) {
    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${loginForm.TaiKhoan}&MatKhau=${loginForm.MatKhau}`;
    this.dataService.post(uri).subscribe((data: any) => {
      if (data === "Tài khoản hoặc mật khẩu không đúng !") {
        this.alert = "Tài khoản hoặc mật khẩu không đúng !";
        $("#modalAlert").modal();
      } else {
        this.nguoiDung = data;
        this.statusLogin = true;
        localStorage.setItem("userLogin", JSON.stringify(data));
        $("#modalDangNhap")
          .modal("hide")
          .data("bs.modal", null);
      }
    });
  }

  dongDangNhap() {
    $("#modalDangNhap").modal("hide").data("bs.modal", null);
  }

  hienDangNhap() {
    $("#modalDangNhap").modal();
  }

  dangKy(registerForm) {
    const objUser = {
      TaiKhoan: registerForm.taiKhoan,
      MatKhau: registerForm.password,
      HoTen: registerForm.HoTen,
      Email: registerForm.email,
      SoDT: registerForm.soDT,
      MaNhom: "GP07",
      MaLoaiNguoiDung: "KhachHang"
    };    

    const uri = "QuanLyNguoiDung/ThemNguoiDung";
    this.dataService.post(uri, objUser).subscribe((data: any) => {      
      if (data === "Tài khoản đã tồn tại") {
        this.alert = "Tài khoản đã tồn tại";
        $("#modalAlert").modal();
      } else {
        this.alert = "Đăng ký tài khoản thành công";
        $("#modalAlert").modal();
      }
    });
  }

  dangXuat() {
    this.statusLogin = false;
    localStorage.removeItem("userLogin");
  }

  loadUser() {
    this.statusEdit = true;
  }

  capNhat(editForm) {
    let newUser = {
      TaiKhoan: this.nguoiDung.TaiKhoan,
      MatKhau: this.nguoiDung.MatKhau,
      HoTen: editForm.HoTen,
      Email: editForm.Email,
      SoDT: editForm.SoDT,
      MaNhom: "GP07",
      MaLoaiNguoiDung: "KhachHang"
    };
    this.listNguoiDung.map(item => {
      if (newUser.TaiKhoan === item.TaiKhoan) {
        newUser.Email = item.email;
        newUser.HoTen = item.HoTen;
        newUser.SoDT = item.SoDT;
      }
    });
    const uri = `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, newUser).subscribe((data: any) => {
      $("#modalAlert").modal();
      $("#modalNguoiDung").modal("hide").data("bs.modal", null);
      this.alert = "Cập nhật người dùng thành công";
    });
  }

  doiMatKhau(changePassForm) {
    this.nguoiDung.MatKhau = changePassForm.MatKhauMoi;
    const uri = `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, this.nguoiDung).subscribe((data: any) => {
      $("#modalAlert").modal();
      $("#modalDoiMatKhau").modal("hide").data("bs.modal", null);
      this.alert = "Cập nhật mật khẩu thành công";
      localStorage.setItem("userLogin", JSON.stringify(this.nguoiDung));
    });
  }

  getLogin() {
    if (localStorage.getItem("userLogin") != null) {
      this.statusLogin = true;
      this.nguoiDung = JSON.parse(localStorage.getItem("userLogin"));
    }
  }

  getListUser() {
    const uri = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.listNguoiDung = data;
    });

  }
  
}
