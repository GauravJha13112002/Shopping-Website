import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart implements OnInit {
  cartItems: any[] = [];

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }

  get totalPrice(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  updateCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  // ✅ One button remove (decrease quantity or delete)
  removeOne(item: any): void {
    const index = this.cartItems.findIndex(p => p.id === item.id);
    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity -= 1;
      } else {
        this.cartItems.splice(index, 1); // remove product if quantity = 1
      }
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cart');
  }
}
