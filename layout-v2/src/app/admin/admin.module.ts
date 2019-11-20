import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderModule } from './header/header.module';
import { MaterialModule } from '../_core/materials/material.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule, AdminRoutingModule, HeaderModule, MaterialModule
  ]
})
export class AdminModule { }
