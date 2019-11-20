import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { GoTopButtonModule } from 'ng2-go-top-button';
import { MaterialModule } from '../_core/materials/material.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule, HomeRoutingModule, FormsModule, GoTopButtonModule, MaterialModule, ReactiveFormsModule
  ],
  exports: [GoTopButtonModule]
})
export class HomeModule { }
