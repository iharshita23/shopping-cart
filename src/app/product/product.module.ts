import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddProductComponent,
    ProductListComponent
  ]

})
export class ProductModule {}
