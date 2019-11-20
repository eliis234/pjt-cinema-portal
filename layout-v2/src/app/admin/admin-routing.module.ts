import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../_core/guards/auth.guard';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch:"full"},
  {    
    path: "",
    component: AdminComponent, 
    children:[
      {path: "admin-page", loadChildren: "./admin-page/admin-page.module#AdminPageModule", canActivate: [AuthGuard]},
      { path: "login", loadChildren: "./login/login.module#LoginModule" }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
