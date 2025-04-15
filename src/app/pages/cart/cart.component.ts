import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem } from '../../../data/products';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.updateCart();
  }

  updateCart() {
    this.cart = this.cartService.getCart();
  }

  incrementQuantity(productId: number) {
    this.cartService.incrementQuantity(productId);
    this.updateCart();
  }

  decrementQuantity(productId: number) {
    this.cartService.decrementQuantity(productId);
    this.updateCart();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.updateCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.updateCart();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  isIncrementDisabled(item: CartItem): boolean {
    return item.quantity >= item.product.stock;
  }
  isDecrementDisabled(item: CartItem): boolean {
    return item.quantity == 1;
  }
}
