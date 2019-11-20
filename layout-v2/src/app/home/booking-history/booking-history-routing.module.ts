import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingHistoryComponent } from './booking-history.component';

const routes: Routes = [
  { path: "", component: BookingHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingHistoryRoutingModule { }
