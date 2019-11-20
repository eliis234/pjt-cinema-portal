import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {

  // newsReview: string = "news";

  newsStatus: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  // Làm theo kiêu có nhiều tab trở lên (ngSwitch)
  // chonNewsReview(val){
  //   this.newsReview = val;
  // }

  appearNews() {
    this.newsStatus = true;
  }

  appearReview() {
    this.newsStatus = false;
  }
}
