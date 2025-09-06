import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList implements OnInit {
  text = '';
  selectedCategory = 'All';
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getAll(); // ✅ Correct usage
  }

  get filteredProducts() {
    return this.products.filter(product =>
      (this.selectedCategory === 'All' || product.category === this.selectedCategory) &&
      product.name.toUpperCase().includes(this.text.toUpperCase())
    );
  }

 addToCart(product: any) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingItem = cart.find((item: any) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;  
  } else {
    cart.push({ ...product, quantity: 1 });  
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${product.name} added to cart!`);
}

  viewProduct(id: number) {
    alert(`View details for product ID: ${id}`);
    // You can add router navigation here
  }
}
