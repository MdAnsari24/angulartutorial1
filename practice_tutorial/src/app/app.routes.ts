import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Other } from './other/other';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'other', component: Other },
];
