import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduceAdminComponent } from './introduce-admin.component';
import { IntroduceAdminRoutingModule } from './introduce-admin-routing.module';

@NgModule({
  declarations: [IntroduceAdminComponent],
  imports: [
    CommonModule, IntroduceAdminRoutingModule
  ]
})
export class IntroduceAdminModule { }
