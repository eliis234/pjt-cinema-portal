import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/share/share-data.service';
import $ from "jquery";
declare var $:any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  trailer: any;


  detailTrailer: string;

  constructor(private shareDataService: ShareDataService) { }
  ngOnInit() {    
    this.shareDataService.shareListMovie.subscribe((data:any)=>{
      this.trailer = data;      
      // let trailer = this.movie.Trailer;
      // console.log(trailer);
      
      // trailer = trailer.split('watch?v=');
      // this.detailTrailer = trailer[0] + "embed/" + trailer[1];
    })
  }

  PauseVideo(){
    $('iframe').attr('src', $('iframe').attr('src'));
    this.trailer = "";
  }
}
