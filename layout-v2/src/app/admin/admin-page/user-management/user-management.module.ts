import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MaterialModule } from 'src/app/_core/materials/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,UserManagementRoutingModule, MaterialModule, FormsModule
  ]
})
export class UserManagementModule { }
