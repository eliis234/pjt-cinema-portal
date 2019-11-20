import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { HeaderModule } from '../header/header.module';
import { MaterialModule } from 'src/app/_core/materials/material.module';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule, AdminPageRoutingModule, HeaderModule, MaterialModule
  ]
})
export class AdminPageModule { }
