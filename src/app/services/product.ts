import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
      description: 'Powerful laptop for multitasking',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?_gl=1*ai0hxz*_ga*MTU2ODc2NzY2NS4xNzUzNTg5OTc4*_ga_8JE65Q40S6*czE3NTM1OTE5NDIkbzIkZzAkdDE3NTM1OTE5NDIkajYwJGwwJGgw'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 25000,
      description: 'Latest model smartphone',
      category: 'Electronics',
      image: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro/Blue-Titanium/Apple-iPhone-15-Pro-Blue-Titanium-frontimage.png'
    },
    {
      id: 3,
      name: 'Backpack',
      price: 3000,
      description: 'Stylish backpack for travel',
      category: 'Fashion',
      image: 'https://i5.walmartimages.com/asr/d4522cbd-6c1b-41bb-8f8c-eb2f8c138e76_1.b5fa2f30f5259f197b8266dfea550186.jpeg'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: 4500,
      description: 'Comfortable running shoes',
      category: 'Fashion',
      image: 'https://png.pngtree.com/png-vector/20210917/ourlarge/pngtree-small-leather-shoes-png-image_3936139.jpg'
    }
  ];

  constructor() {}

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find(p => p.id === id);
  }

  getCategories() {
    return [...new Set(this.products.map(p => p.category))];
  }

  search(query: string) {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
