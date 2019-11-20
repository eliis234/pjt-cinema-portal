import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { DataService } from "src/app/_core/services/data.service";
import { SelectionModel } from "@angular/cdk/collections";
import $ from "jquery";
declare var $: any;

export class ListUser {
  // id: any;
  TaiKhoan: any;
  MatKhau: any;
  HoTen: any;
  Email: any;
  SoDT: any;
  MaNhom: any;
  MaLoaiNguoiDung: any;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  alert: any;
  user = new ListUser(); 

  displayedColumns: string[] = [
    // "select",
    "id",
    "TaiKhoan",
    "HoTen",
    "Email",
    "SoDT",
    "MaNhom",
    "TenLoaiNguoiDung",
    "Setting"
  ];

  dataSource = new MatTableDataSource<ListUser>();

  selection = new SelectionModel<ListUser>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  statusChangeForm: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListUser();

    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }

  getListUser(){
    const uri = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07`;
    this.dataService.get(uri).subscribe((data: any) =>{
      this.dataSource.data = data;
    })
  }

  insertUser(insertForm){
    const objUser = {
      TaiKhoan: insertForm.TaiKhoan,
      MatKhau: insertForm.MatKhau,
      HoTen: insertForm.HoTen,
      Email: insertForm.Email,
      MaNhom: insertForm.MaNhom,
      SoDT: insertForm.SoDT,
      MaLoaiNguoiDung: insertForm.MaLoaiNguoiDung
    }

    const uri = `QuanLyNguoiDung/ThemNguoiDung`;
    this.dataService.post(uri, objUser).subscribe((data: any) => {
      if(data === "Tài khoản đã tồn tại"){
        this.alert = "Tài khoản đã tồn tại";
        $("#modalFail").modal();
      }
      else{
        this.getListUser();     
        $('#editUserModal').modal( 'hide' ).data( 'bs.modal', null );
        $("#modalFail").modal();     
        this.alert = "Thêm người dùng thành công";  
      }               
    })
  }

  updateUser(insertForm){
    for(let i=0; i<this.dataSource.data.length; i++){
      if(this.dataSource.data[i].TaiKhoan === this.user.TaiKhoan){
        this.dataSource.data[i].MatKhau = insertForm.MatKhau;
        this.dataSource.data[i].HoTen = insertForm.HoTen;
        this.dataSource.data[i].Email = insertForm.Email;
        this.dataSource.data[i].MaNhom = insertForm.MaNhom;
        this.dataSource.data[i].MaNhom = insertForm.MaNhom;
        this.dataSource.data[i].SoDT = insertForm.SoDT;
        this.dataSource.data[i].MaLoaiNguoiDung = insertForm.MaLoaiNguoiDung;
        this.user = this.dataSource.data[i];
      }
    }
    const uri = `QuanLyNguoiDung/CapNhatThongTin`;
    this.dataService.post(uri, this.user).subscribe((data: any) => {
      $("#modalFail").modal();     
      $('#editUserModal').modal( 'hide' ).data( 'bs.modal', null );
      this.alert = "Cập nhật người dùng thành công";
    })
  }

  deleteUser(user){
    const uri = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.TaiKhoan}`;
    this.dataService.delete(uri, user.TaiKhoan).subscribe((data: any) => {
      this.getListUser();
      $("#modalFail").modal();     
      this.alert = "Xóa người dùng thành công";
    })
  }

  changeEdit(row){
    this.statusChangeForm = true;

    this.user.TaiKhoan = row.TaiKhoan;
    this.user.MatKhau = row.MatKhau;
    this.user.Email = row.Email;
    this.user.SoDT = row.SoDT;
    this.user.MaNhom = row.MaNhom;
    this.user.MaLoaiNguoiDung = row.MaLoaiNguoiDung;
    this.user.HoTen = row.HoTen;
  }

  changeAdd(){
    this.statusChangeForm = false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
