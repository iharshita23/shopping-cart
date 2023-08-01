import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsList: Product[] = [];

  constructor() {}

  getProducts() {
    return this.productsList;
  }

  addProduct(product: Product): void {
    this.productsList.push(product);
  }
}
