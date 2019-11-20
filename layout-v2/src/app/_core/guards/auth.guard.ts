import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  
{
  nguoiDung: any;
  constructor(private router: Router){
  }
  canActivate(){
    if(localStorage.getItem("userLogin")){
      this.nguoiDung = JSON.parse(localStorage.getItem("userLogin"));
      if(this.nguoiDung.MaLoaiNguoiDung === "QuanTri"){
        return true;
      }
      else{
        this.router.navigate(["/admin/login"]);
        return false;
      }
    }
    
    else {
      this.router.navigate(["/admin/login"]);
      return false;
    }
  }
}
