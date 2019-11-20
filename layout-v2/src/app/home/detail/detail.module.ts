import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { DetailContentModule } from './detail-content/detail-content.module';
import { DetailInfoModule } from './detail-info/detail-info.module';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule, DetailRoutingModule, PipeModule, DetailContentModule, DetailInfoModule
  ]
})
export class DetailModule { }
