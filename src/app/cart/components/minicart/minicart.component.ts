import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.css']
})
export class MinicartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
}