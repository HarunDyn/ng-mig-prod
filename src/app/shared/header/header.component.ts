import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countProduct = "0";

  cartProductData$!: Observable<any>;
  constructor(private store: Store<any>) {
    this.cartProductData$ = this.store.select('cart');
  }

  ngOnInit() {
    this.cartProductData$.subscribe((value) => {
      this.countProduct = (value.total).toString();
    })
  }

}
