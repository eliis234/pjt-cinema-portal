import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasComponent } from './cinemas.component';
import { CinemaComponent } from './cinema/cinema.component';

@NgModule({
  declarations: [CinemasComponent, CinemaComponent],
  exports: [CinemasComponent],
  imports: [
    CommonModule
  ]
})
export class CinemasModule { }
