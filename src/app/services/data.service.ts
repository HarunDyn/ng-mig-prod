import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('assets/data.json')
      .toPromise()
      .then(res => <Data[]>res.data)
      .then(data => { return data; });
  }


}
