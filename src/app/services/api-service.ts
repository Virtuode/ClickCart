import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Patients } from '../interfaces/patients';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';

  private patientUrl = 'http://localhost:3000/api/patients';

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<Patients[]> {
    return this.http.get<Patients[]>(this.patientUrl);
  }

  createPatient(obj: Patients): Observable<Patients> {
    return this.http.post<Patients>(this.patientUrl, obj);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
