import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  faShoppingBasket = faShoppingBasket;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItemCount().subscribe(count => this.cartCount = count);
  }
} 
