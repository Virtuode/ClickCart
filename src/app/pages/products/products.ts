import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiService } from '../../services/api-service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Error } from '../../components/error/error';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-products',
  imports: [NgIf,NgFor,Error,Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Product[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
      }
    });
  }
}