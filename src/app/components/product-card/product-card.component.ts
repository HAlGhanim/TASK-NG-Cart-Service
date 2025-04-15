import { CartService } from './../../services/cart.service';
import { Component, Input } from '@angular/core';
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

  constructor(private _cartService: CartService) {}

  addToCart() {
    this._cartService.addToCart(this.product);
  }

  isAddDisabled(): boolean {
    if (this.product.stock <= 0) return true;

    const item = this._cartService
      .getCart()
      .find((i) => i.product.id === this.product.id);

    return item ? item.quantity >= this.product.stock : false;
  }
}
