import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailInfoComponent } from './detail-info.component';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  declarations: [DetailInfoComponent],
  exports: [DetailInfoComponent],
  imports: [
    CommonModule, PipeModule
  ]
})
export class DetailInfoModule { }
