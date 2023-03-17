import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Data[] = [];
  category = "Tüm Kategoriler";
  loading = true;

  categories = [
    "Tüm Kategoriler",
    "Temel Gıda",
    "Süt, Kahvaltılık ve Kahve",
    "Atıştırmalık",
    "Meyve, Sebze"
  ]
  constructor(private dataService: DataService, private primengConfig: PrimeNGConfig) { }

  async ngOnInit() {
    this.products = await this.dataService.getProducts();
    this.loading = false;
  }

  async filterProducts() {
    this.loading = true;
    if (this.category === "Tüm Kategoriler") {
      this.products = await this.dataService.getProducts();
      this.loading = false;
    } else {
      this.products = await this.dataService.getProducts();
      this.products = this.products.filter(product => product['category'] === this.category)
      this.loading = false;
    }
  }

  handleEventCategory(event: any) {
    this.category = event;
    this.filterProducts();
  }

}
