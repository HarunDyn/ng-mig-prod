import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';
import { DataService } from 'src/app/services/data.service';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'src/app/store/reducers/cart.reducer';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { RoutingModule } from 'src/app/app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        RoutingModule,
        HttpClientTestingModule,
        SharedModule,
        MenubarModule,
        BrowserAnimationsModule,
        CardModule,
        ButtonModule,
        ProgressSpinnerModule,
        StoreModule.forRoot({ cart: cartReducer })
      ],
      providers: [
        { provide: DataService }
      ]

    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create home comp', async () => {
    expect(component).toBeTruthy();
  });

  it('should category equal to Tüm Kategoriler', async () => {
    expect(component.category).toEqual("Tüm Kategoriler");
  });

});
