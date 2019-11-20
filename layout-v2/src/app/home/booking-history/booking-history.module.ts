import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history.component';
import { BookingHistoryRoutingModule } from './booking-history-routing.module';
import { MaterialModule } from 'src/app/_core/materials/material.module';

@NgModule({
  declarations: [BookingHistoryComponent],
  imports: [
    CommonModule, BookingHistoryRoutingModule, MaterialModule
  ]
})
export class BookingHistoryModule { }
