import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  declarations: [ModalComponent],
  exports: [ModalComponent],
  imports: [CommonModule, PipeModule]
})
export class ShareModule {}
