import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ApiService } from '../../services/api-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-productdetail',
  imports: [NgIf,RouterLink,CurrencyPipe],
  templateUrl: './productdetail.html',
  styleUrl: './productdetail.css',
})
export class Productdetail implements OnInit {
  product!: Product;
  loading = true;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getProductById(id).subscribe({
        next: (data) => { this.product = data; this.loading = false; },
        error: () => { this.loading = false; }
      });
    }
  }
}
