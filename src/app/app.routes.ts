import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Home Page
  {
    path: '', // Default path for Home
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  // 2. List Page (Products)
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },

  // 3. Detail Page (Dynamic ID)
  // Syntax Fix: The colon must come BEFORE the variable name ':id'
  {
    path: 'products/:id', 
    loadComponent: () => import('./pages/productdetail/productdetail').then((m) => m.Productdetail),
  },

  // Fallback: Redirect unknown routes to home
  { path: '**', redirectTo: '' }
];