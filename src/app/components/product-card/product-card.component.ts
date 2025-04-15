import { CartService } from './../../services/cart.service';
import { Component, Input, Output } from '@angular/core';
import { Product } from '../../../data/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() inCart?: boolean = false;

  constructor(private _cartService: CartService) {}
  addToCart() {
    this._cartService.addToCart(this.product);
  }
  getCart() {
    this._cartService.getCart();
  }
}
