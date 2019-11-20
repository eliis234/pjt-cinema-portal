import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryManagementRoutingModule } from './history-management-routing.module';
import { HistoryManagementComponent } from './history-management.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/materials/material.module';

@NgModule({
  declarations: [HistoryManagementComponent],
  imports: [
    CommonModule,
    HistoryManagementRoutingModule,
    MaterialModule, 
    FormsModule
  ]
})
export class HistoryManagementModule { }
