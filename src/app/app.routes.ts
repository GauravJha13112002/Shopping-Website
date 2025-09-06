import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Cart } from './cart/cart';
import { Signup } from './signup/signup';
import { Login } from './login/login';

export const routes: Routes = [
  {path: '', component: ProductList},
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: Cart},
  { path: 'signup', component: Signup },
  { path: 'login', component: Login},
];
