import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import $ from "jquery";
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alert: any;
  listUser: any = [];
  user: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getListUser();
  }

  login(loginForm){
    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${loginForm.TaiKhoan}&MatKhau=${loginForm.MatKhau}`;
    this.dataService.post(uri).subscribe((data:any) =>{
      if(data === "Tài khoản hoặc mật khẩu không đúng !"){        
        $("#modalFail").modal(); 
        this.alert = "Đăng nhập thất bại";
      }      
      if(data.MaLoaiNguoiDung === "KhachHang"){        
        $("#modalFail").modal(); 
        this.alert = "Bạn không có quyền truy cập";
      }      
      if(data.MaLoaiNguoiDung === "QuanTri"){
        localStorage.setItem("userLogin", JSON.stringify(data));
        this.router.navigate(['/admin/admin-page/introduce']);        
      }                    
    }) 
  }

  getListUser(){
    const uri = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.listUser = data;
      console.log(data);  
    })
  }

}
