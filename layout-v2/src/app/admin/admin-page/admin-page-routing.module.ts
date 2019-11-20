import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { AuthGuard } from 'src/app/_core/guards/auth.guard';

const routes: Routes = [
  {path:"", component: AdminPageComponent, children:[
    {path: "introduce", loadChildren:"./introduce-admin/introduce-admin.module#IntroduceAdminModule"},
    {path: "user-management", loadChildren:"./user-management/user-management.module#UserManagementModule"},
    {path: "movie-management", loadChildren:"./movie-management/movie-management.module#MovieManagementModule"}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
