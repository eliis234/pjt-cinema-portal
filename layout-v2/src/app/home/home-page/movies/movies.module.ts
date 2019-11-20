import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { FilmComingComponent } from './film-coming/film-coming.component';
import { FilmShowingComponent } from './film-showing/film-showing.component';
import { ItemFilmComponent } from './item-film/item-film.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShareModule } from 'src/app/_core/share/share.module';

@NgModule({
  declarations: [MoviesComponent, FilmComingComponent, FilmShowingComponent, ItemFilmComponent],
  exports: [MoviesComponent],
  imports: [
    CommonModule, CarouselModule, ShareModule
  ]
})
export class MoviesModule { }
