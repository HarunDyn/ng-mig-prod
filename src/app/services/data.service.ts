import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/data.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {

  constructor(private http: HttpClient) { }

  async getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.http.get<any>('assets/data.json').subscribe((data) => {
        resolve(data.data);
      }),
        (error: any) => {
          reject(error);
        }
    })
  }

}
