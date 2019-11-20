import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_core/services/data.service';  
import $ from "jquery";
declare var $:any;

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  id: any;
  tenPhim: string;
  movie: any;
  detailTrailer: string;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.getParamsFromURL();
    this.chiTietPhim();
  }

  getParamsFromURL() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  chiTietPhim() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.movie = data;
      
      let trailer = this.movie.Trailer;
      trailer = trailer.split('watch?v=');
      this.detailTrailer = trailer[0] + "embed/" + trailer[1];
    });
  }

  PauseVideo(){
    $('iframe').attr('src', $('iframe').attr('src'));
  }
}
