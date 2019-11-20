import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  Input
} from "@angular/core";
import { ItemSeatComponent } from "../item-seat/item-seat.component";
import { ShareDataService } from "src/app/_core/share/share-data.service";
import { Location } from "@angular/common";
import $ from "jquery";
declare var $: any;

@Component({
  selector: "app-list-seat",
  templateUrl: "./list-seat.component.html",
  styleUrls: ["./list-seat.component.scss"]
})
export class ListSeatComponent implements OnInit {
  @ViewChildren(ItemSeatComponent) tagListItemGhe: QueryList<ItemSeatComponent>;

  @Input() mangGhe: any;

  movie: any;

  minutes: number = 4;
  seconds: number = 59;
  second: any;

  interval: any;
  isTimeOut: boolean = true;

  danhSachGheDangDat: any = [];

  constructor(
    private shareDataService: ShareDataService,
    private location: Location
  ) {}

  ngOnInit() {
    this.startTimer();
    this.movie = JSON.parse(localStorage.getItem("movieBooking"));
  }

  chonGhe(objGhe) {
    let ve: { MaGhe: string; GiaVe: number; TenGhe: string } = {
      MaGhe: objGhe.ghe.MaGhe,
      GiaVe: objGhe.ghe.GiaVe,
      TenGhe: objGhe.ghe.TenGhe
    };

    if (objGhe.trangThaiChon) {
      this.danhSachGheDangDat.push(ve);
      this.shareDataService.notifyCountValue(this.danhSachGheDangDat);
    } else {
      let index = this.danhSachGheDangDat.findIndex(item => {
        return item.MaGhe === objGhe.ghe.MaGhe;
      });
      this.danhSachGheDangDat.splice(index, 1);
      this.shareDataService.notifyCountValue(this.danhSachGheDangDat);
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 59;
      } 
      else{
        this.seconds < 10 ? ("0" + this.seconds--) : this.seconds--;
        //this.seconds--;
      }
     
      if (this.seconds === 0 && this.minutes === 0) {
        this.pauseTimer();
        this.isTimeOut = false;
        $("#myModal").modal();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  public backPrePage() {
    this.location.back();
    $("#myModal")
      .modal("hide")
      .data("bs.modal", null);
  }

  chuyenTrang() {
    this.backPrePage();
  }

  ngOnDestroy() {
    this.pauseTimer();
  }
}
