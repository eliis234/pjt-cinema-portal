import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/_core/share/share-data.service';

@Component({
  selector: 'app-item-film',
  templateUrl: './item-film.component.html',
  styleUrls: ['./item-film.component.scss']
})
export class ItemFilmComponent implements OnInit {

  @Input() movie;

  homeTrailer: any;
  constructor(private router: Router, private shareDataService: ShareDataService) { }

  ngOnInit() {
  }

  chiTietPhim() {
    this.router.navigate(
      ["/detail", this.movie.MaPhim]);
  }

  trailer(){
    let trailer = this.movie.Trailer;
      trailer = trailer.split('watch?v=');
      this.homeTrailer = trailer[0] + "embed/" + trailer[1];
    this.shareDataService.sharingMovieShowingTrailer(this.homeTrailer);    
  }
}
