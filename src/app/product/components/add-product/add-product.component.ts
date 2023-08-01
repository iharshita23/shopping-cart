import { Component, ViewChild } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(private ProductService: ProductService) {}
  showForm = false;

  formData = {
    name: '',
    description: '',
    price: 0,
  };

  onAddProduct() {
    console.log(this.formData);

    this.ProductService.addProduct({
      name: this.formData.name,
      description: this.formData.description,
      price: this.formData.price,
    });

    this.formData = {
      name: '',
      description: '',
      price: 0,
    };
  }

  hideForm() {
    this.showForm = false;
  }
}
