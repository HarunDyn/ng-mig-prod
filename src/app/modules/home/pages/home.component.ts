import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, removeProduct } from 'src/app/store/actions/cart.actions';
import { Product } from 'src/app/models/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  category = "Tüm Kategoriler";
  loading = true;

  categories = [
    "Tüm Kategoriler",
    "Temel Gıda",
    "Süt, Kahvaltılık ve Kahve",
    "Atıştırmalık",
    "Meyve, Sebze"
  ]
  cartProductData$!: Observable<any>;

  constructor(private dataService: DataService, public store: Store<any>, private cdf: ChangeDetectorRef) {
    this.cartProductData$ = this.store.select('cart');
  }


  async ngOnInit() {
    await this.getProducts();
    this.updateQuantityProducts();
    this.loading = false;
  }

  async getProducts() {
    this.products = await this.dataService.getProducts().then((data: Product[]) => {
      return data;
    }
    )
  }

  updateQuantityProducts() {
    this.cartProductData$.subscribe((value) => {
      this.products.map((product: Product) => {
        const productCurrent = value.data.filter((item: any) => item.id === product.id)[0];
        if (productCurrent) {
          product.quantity = productCurrent.quantity;
        } else {
          product.quantity = 0;
        }
      })
    })
  }

  addproduct(product: Product) {
    this.addProductToCart(product)
    this.updateQuantityProducts();
  }

  addProductToCart(product: Product) {
    this.store.dispatch(addProduct(product));
  }

  removeProductFromCart(product: Product) {
    this.store.dispatch(removeProduct(product));
  }

  async filterProducts() {
    this.loading = true;
    if (this.category === "Tüm Kategoriler") {
      this.products = await this.dataService.getProducts().then((data: Product[]) => {
        return data;
      }
      );
      this.updateQuantityProducts();
      this.loading = false;
    } else {
      this.products = await this.dataService.getProducts().then((data: Product[]) => {
        return data;
      }
      );
      this.products = this.products.filter(product => product['category'] === this.category)
      this.updateQuantityProducts();
      this.loading = false;
    }
  }

  handleEventCategory(event: any) {
    this.category = event;
    this.filterProducts();
  }

}
