import { Component, OnInit } from '@angular/core';

interface HistoryFilm {
  // historyId: string;
  // userId: string;
  userName: string;
  time: string;
  // filmId: string;
  filmName: string;
  amount: number;
  price: string;
}

const DATA:HistoryFilm[] = []

@Component({
  selector: 'app-history-management',
  templateUrl: './history-management.component.html',
  styleUrls: ['./history-management.component.scss']
})
export class HistoryManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


