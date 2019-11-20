import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieManagementComponent } from './movie-management.component';
import { MovieManagementRoutingModule } from './movie-management-routing.module';
import { MaterialModule } from 'src/app/_core/materials/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovieManagementComponent],
  imports: [
    CommonModule, MovieManagementRoutingModule, MaterialModule, FormsModule
  ]
})
export class MovieManagementModule { }
