import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private movieShowingTrailer = new BehaviorSubject([] as any);
  shareListMovie = this.movieShowingTrailer.asObservable();

  private movieSeatBooking = new BehaviorSubject({} as any);
  shareMovieBooking = this.movieSeatBooking.asObservable();

  private shareListChoosingMovie = new Subject();

  constructor() { }

  sharingMovieShowingTrailer(Movie: any) {
    this.movieShowingTrailer.next(Movie);
  }

  sharingMovieBooking(Booking: any){
    this.movieSeatBooking.next(Booking);
  }
 
  public get ValueFromChild() {
    return this.shareListChoosingMovie;
  }

  public notifyCountValue(movie: any){
    this.shareListChoosingMovie.next(movie);
  }
}
