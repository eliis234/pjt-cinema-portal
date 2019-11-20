import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { ListSeatComponent } from './list-seat/list-seat.component';
import { ItemSeatComponent } from './item-seat/item-seat.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/_core/materials/material.module';

@NgModule({
  declarations: [BookingComponent, ListSeatComponent, ItemSeatComponent, BookingTicketComponent],
  imports: [
    CommonModule, BookingRoutingModule, FormsModule, MaterialModule
  ]
})
export class BookingModule { }
