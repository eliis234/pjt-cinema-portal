import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-seat",
  templateUrl: "./item-seat.component.html",
  styleUrls: ["./item-seat.component.scss"]
})
export class ItemSeatComponent implements OnInit {
  trangThaiChon: boolean = false;

  @Input() ghe;

  @Output() eventGhe = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  chonGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    const objGhe = {
      trangThaiChon: this.trangThaiChon,
      ghe: this.ghe
    };
    this.eventGhe.emit(objGhe);
  }
}
