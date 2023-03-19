import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingModule } from 'src/app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'src/app/store/reducers/cart.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CartComponent } from './cart.component';
import { DebugElement } from '@angular/core';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CartComponent
      ],
      imports: [
        RoutingModule,
        SharedModule,
        CardModule,
        ButtonModule,
        ProgressSpinnerModule,
        StoreModule.forRoot({ cart: cartReducer })
      ]

    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the cart comp', () => {
    expect(component).toBeTruthy();
  });

  it('Loading must be false', async () => {
    expect(component.loading).toBeFalse();
  });

});
