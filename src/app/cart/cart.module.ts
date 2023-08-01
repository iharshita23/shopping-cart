import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinicartComponent } from './components/minicart/minicart.component';

@NgModule({
  declarations: [
    MinicartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinicartComponent
  ]
})
export class CartModule { }
