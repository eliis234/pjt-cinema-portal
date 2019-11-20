import { Component, OnInit } from "@angular/core";
import { ShareDataService } from "src/app/_core/share/share-data.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/_core/services/data.service";
import $ from "jquery";
declare var $: any;

@Component({
  selector: "app-booking-ticket",
  templateUrl: "./booking-ticket.component.html",
  styleUrls: ["./booking-ticket.component.scss"]
})
export class BookingTicketComponent implements OnInit {
  panelOpenState = false;
  listBooking = new Subscription();
  movieBooking: any = [];
  danhSachGheDaDat: any = [];

  maLichChieu: any;
  user: any;
  alert: any;

  movie: any;

  tongTien: number = 0;
  totalCostCombo: any = 0;

  combo: any = [
    {
      id: 1,
      name: "combo1",
      price: 55000,
      img: "../../../../assets/images/combo_1.png",
      statusMinus: false,
      statusPlus: true
    },
    {
      id: 2,
      name: "combo2",
      price: 75000,
      img: "../../../../assets/images/combo_2.png",
      statusMinus: false,
      statusPlus: true
    }
  ];

  detailCombo: any = [
    { id: 1, quantity: 0, totalCost: 0 },
    { id: 2, quantity: 0, totalCost: 0 }
  ];

  constructor(
    private shareDataService: ShareDataService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getParamsFromURL();
    this.movie = JSON.parse(localStorage.getItem("movieBooking"));
    this.getChoosingSeat();
    this.getMovieBooking();
  }

  // lấy danh sách ghế người dùng chọn từ list-seat
  getChoosingSeat() {
    this.listBooking = this.shareDataService.ValueFromChild.subscribe(
      (data: any) => {
        this.danhSachGheDaDat = data;
        this.danhSachGheDaDat.map(item => {
          this.tongTien = item.GiaVe * this.danhSachGheDaDat.length;
        });
        if (this.danhSachGheDaDat.length === 0) {
          this.tongTien = 0;
        }
      }
    );
  }

  getParamsFromURL() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getMovieBooking() {
    this.shareDataService.shareMovieBooking.subscribe((dataMovie: any) => {
      this.movieBooking = dataMovie;
      localStorage.setItem("movieBooking", JSON.stringify(this.movieBooking));
    });
  }

  bookingTicket(bookingForm) {
    // kiểm tra đã đặt ghế chưa
    if (this.danhSachGheDaDat.length === 0) {
      this.alert = "Bạn chưa chọn ghế !";
      $("#modalBooking").modal();
    }
    // kiểm tra đăng nhập
    else if (!localStorage.getItem("userLogin")) {
      this.alert = "Vui lòng đăng nhập !";
      $("#modalBooking").modal();
    }

    // đặt vé
    else {
      this.user = JSON.parse(localStorage.getItem("userLogin"));
      let DanhSachVe: any = [];
      this.danhSachGheDaDat.map(item => {
        let chiTietVe: { MaGhe: string; GiaVe: number } = {
          MaGhe: item.MaGhe,
          GiaVe: item.GiaVe
        };
        DanhSachVe.push(chiTietVe);
      });

      const uri = "QuanLyDatVe/DatVe";
      const ve = {
        MaLichChieu: this.maLichChieu,
        TaiKhoanNguoiDung: this.user.TaiKhoan,
        DanhSachVe: DanhSachVe
      };
      this.dataService.post(uri, ve).subscribe((data: any) => {
        if (data === "Đặt vé thành công!") {
          this.router.navigate(["/booking-history"]);
        }
      });
    }
  }

  plusQuantity(name) {
    this.combo.map(item => {
      this.detailCombo.map(itemDetail => {
        if (item.id === itemDetail.id) {
          if (item.name === name) {
            item.statusMinus = true;
            $(`#${item.name}`).val(++itemDetail.quantity);
            if (itemDetail.quantity >= 10) {
              item.statusPlus = false;
            }
            else if (itemDetail.quantity < 10) {
              item.statusPlus = true;
              let totalCostItem = 0;
              for (let i = 0; i < this.combo.length; i++) {
                totalCostItem +=
                  this.combo[i].price * this.detailCombo[i].quantity;
              }
              this.totalCostCombo = totalCostItem;
              return this.totalCostCombo;
            }
            else if (itemDetail.quantity === 0) {
              this.totalCostCombo = 0;
            }
          }
        }
      });
    });
  }

  minusQuantity(name) {
    this.combo.map(item => {
      this.detailCombo.map(itemDetail => {
        if (item.id === itemDetail.id) {
          if (item.name === name) {
            item.statusPlus = true;
            $(`#${item.name}`).val(--itemDetail.quantity);
            if (itemDetail.quantity <= 0 || itemDetail.quantity === 0) {
              this.totalCostCombo = 0;
              return (item.statusMinus = false);
            } else if (itemDetail.quantity > 0) {
              item.statusMinus = true;
              let totalCostItem = 0;
              for (let i = 0; i < this.combo.length; i++) {
                totalCostItem +=
                  this.combo[i].price * this.detailCombo[i].quantity;
              }
              this.totalCostCombo = totalCostItem;
              return this.totalCostCombo;
            }
          }
        }
      });
    });
  }
}
