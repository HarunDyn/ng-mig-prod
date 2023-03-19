import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/data.model';

export const add = "[Cart Component] Add";
export const remove = "[Cart Component] Remove";
export const clearProd = "[Cart Component] clearProd";
export const clear = "[Cart Component] Clear";

export const addProduct = createAction(add, props<Product>());
export const removeProduct = createAction(remove, props<Product>());
export const clearProduct = createAction(clearProd, props<Product>());
export const clearCart = createAction(clear);
