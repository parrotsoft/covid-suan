import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [MainComponent, NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [MainComponent]
})
export class LayoutModule { }
