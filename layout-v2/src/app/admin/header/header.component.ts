import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nguoiDung: any;
  statusEdit: boolean = false;
  statusLogin: boolean = true;
  alert: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    $(".search-box a, .search-box .app-search .srh-btn").on("click", function() {
      $(".app-search").slideToggle(200);
    })

    this.nguoiDung = JSON.parse(localStorage.getItem("userLogin"));
    console.log(this.nguoiDung);
  }

  openEditMadal(){
    this.statusEdit = true;
  }  

  capNhat(editForm){
    this.nguoiDung.HoTen = editForm.HoTen;
    this.nguoiDung.Email = editForm.Email;
    this.nguoiDung.SoDT = editForm.SoDT;

    const uri = `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, this.nguoiDung).subscribe((data: any) => {
      $("#modalAlert").modal();     
      $('#modalNguoiDung').modal( 'hide' ).data( 'bs.modal', null );
      this.alert = "Cập nhật người dùng thành công";
      localStorage.setItem("userLogin", JSON.stringify(data));  
    })
  }

  doiMatKhau(changePassForm){
    this.nguoiDung.MatKhau = changePassForm.MatKhauMoi;

    const uri = `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, this.nguoiDung).subscribe((data: any) => {
      $("#modalAlert").modal();     
      $('#modalDoiMatKhau').modal( 'hide' ).data( 'bs.modal', null );
      this.alert = "Cập nhật mật khẩu thành công";
      localStorage.setItem("userLogin", JSON.stringify(data));  
    })
  }

  logOut(){
    this.statusLogin = false;
    localStorage.removeItem("userLogin");
    this.router.navigate(["/admin/login"]);
  }
}
