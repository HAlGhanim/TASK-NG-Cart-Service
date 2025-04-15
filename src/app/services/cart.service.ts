import { Injectable } from '@angular/core';
import { CartItem, Product } from '../../data/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: CartItem[] = [];

  addToCart(product: Product) {
    console.log('product added to cart');
    this.products.push({ product, quantity: 1 });
    console.log(this.products);
  }

  getCart() {
    console.log(this.products);
    return this.products;
  }
}
