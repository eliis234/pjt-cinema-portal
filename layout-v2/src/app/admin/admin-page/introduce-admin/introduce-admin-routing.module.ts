import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroduceAdminComponent } from './introduce-admin.component';

const routes: Routes = [
  {path:"", component: IntroduceAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduceAdminRoutingModule { }
