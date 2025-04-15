import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem, Product } from '../../../data/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.getCart();
  }

  getCart() {
    this.products = this.cartService.getCart();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
