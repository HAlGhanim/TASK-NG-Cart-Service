import { Injectable } from '@angular/core';
import { CartItem, Product } from '../../data/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    const existingItem = this.cart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity++;
      }
      console.log(this.cart);
    } else {
      this.cart.push({ product, quantity: 1 });
      console.log(this.cart);
    }
  }

  incrementQuantity(productId: number) {
    const item = this.cart.find((item) => item.product.id === productId);

    if (item && item.quantity < item.product.stock) {
      item.quantity++;
    }
  }

  decrementQuantity(productId: number) {
    const item = this.cart.find((item) => item.product.id === productId);

    if (item && item.quantity > 1) {
      item.quantity--;
    } else if (item) {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.product.id !== productId);
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.cart = [];
  }
}
