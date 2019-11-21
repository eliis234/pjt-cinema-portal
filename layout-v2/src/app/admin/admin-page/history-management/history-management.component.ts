import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface HistoryFilm {
  // historyId: string;
  // userId: string;
  userName: string;
  time: string;
  // filmId: string;
  filmName: string;
  amount: number;
  price: number;
}

const DATA: HistoryFilm[] = [
  {
    userName: 'Ben Nguyen',
    time: '20/11/2019 08:00',
    filmName: 'Ted 35',
    amount: 2,
    price: 570000
  }, {
    userName: 'Ben Nguyen',
    time: '20/11/2019 08:05',
    filmName: 'Trainwreck',
    amount: 1,
    price: 580000
  }, {
    userName: 'Mai Hoang Minh',
    time: '20/11/2019 10:00',
    filmName: 'Ted 35',
    amount: 2,
    price: 570000
  }, {
    userName: 'Mai Hoang Minh',
    time: '20/11/2019 12:15',
    filmName: 'Home',
    amount: 1,
    price: 580000
  }, {
    userName: 'Nguyen Hoang Nhan',
    time: '20/11/2019 13:20',
    filmName: 'Ant-Man',
    amount: 3,
    price: 550000
  }
]

@Component({
  selector: 'app-history-management',
  templateUrl: './history-management.component.html',
  styleUrls: ['./history-management.component.scss']
})
export class HistoryManagementComponent implements OnInit {
  displayedColumns: string[] = ['index', 'userName', 'time', 'filmName', 'amount', 'price', 'sum'];
  dataSource: MatTableDataSource<HistoryFilm>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}