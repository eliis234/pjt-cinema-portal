import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-film-coming',
  templateUrl: './film-coming.component.html',
  styleUrls: ['./film-coming.component.scss']
})
export class FilmComingComponent implements OnInit {

  listMovie: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListMovie();
  }

  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP07";
    this.dataService.get(uri).subscribe((data:any) => {
      this.listMovie = data;
    });
  }

  customOptions: OwlOptions = {
    navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
