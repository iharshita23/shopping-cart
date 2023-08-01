import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartItemCount = new BehaviorSubject(0);

  getCart(): Product[] {
    return [...this.cart];
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartItemCount.next(this.cart.length);
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }
  constructor() { }
}
