import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "home-page", loadChildren: "./home-page/home-page.module#HomePageModule" },
      { path: "booking/:id", loadChildren: "./booking/booking.module#BookingModule" },
      { path: "news/:id", loadChildren: "./news/news.module#NewsModule" },
      { path: "reviews", loadChildren: "./reviews/reviews.module#ReviewsModule" },
      { path: "detail/:id", loadChildren: "./detail/detail.module#DetailModule" },
      {path: "contact", loadChildren: "./contact/contact.module#ContactModule"},
      {path: "booking-history", loadChildren: "./booking-history/booking-history.module#BookingHistoryModule"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
