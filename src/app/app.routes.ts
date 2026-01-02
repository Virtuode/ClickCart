import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Home Page
  {
    path: '', // Default path for Home
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },


  {
    path: 'patient', // Default path for Home
    loadComponent: () => import('./pages/patient/patient').then((m) => m.Patient),
  },

  {
    path: 'report', // Default path for Home
    loadComponent: () => import('./pages/report/report').then((m) => m.Report),
  },

  {
    path: 'staff', // Default path for Home
    loadComponent: () => import('./pages/staff/staff').then((m) => m.Staff),
  },

  


  // Fallback: Redirect unknown routes to home
  { path: '**', redirectTo: '' }
];