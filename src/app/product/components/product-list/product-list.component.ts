import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';
import { ProductService } from '../../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
