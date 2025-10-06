import { Routes } from '@angular/router';
import { Products } from './products/products';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: Products },
];
