import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/data.model';
import { addProduct, clearCart, clearProduct, removeProduct } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartProducts: Product[] = [];
  cartProductData$!: Observable<any>;
  totalPrice = 0;
  totalCount = 0;

  loading = true;

  constructor(
    private store: Store<any>
  ) {
    this.cartProductData$ = this.store.select('cart');
  }

  ngOnInit(): void {
    this.cartProductData$.subscribe((value) => {
      this.cartProducts = value.data;
      this.totalPrice = value.totalPrice;
      this.totalCount = value.total;
      this.loading = false;
    })
  }

  removeProductToStore(product: Product) {
    this.store.dispatch(removeProduct(product));
  }

  addProductToStore(product: Product) {
    this.store.dispatch(addProduct(product));
  }

  clearProductToStore() {
    this.store.dispatch(clearCart());
  }

  clearProdToStore(product: Product) {
    this.store.dispatch(clearProduct(product));
  }

}
