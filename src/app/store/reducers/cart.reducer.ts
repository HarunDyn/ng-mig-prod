
import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct, clearCart, clearProduct } from '../actions/cart.actions';
import { Product } from 'src/app/models/data.model';


interface CartState {
  total: number;
  totalPrice: number;
  data: Product[];
}


const initialState: CartState = {
  total: 0,
  totalPrice: 0,
  data: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addProduct, (state, product: any) => {
    const productCurrent = state.data.filter(item => item.id === product.id)[0];

    if (productCurrent) {
      const newStateFilter = state.data.filter(item => item.id !== product.id);

      const productIns = {
        id: productCurrent.id,
        name: productCurrent.name,
        price: productCurrent.price,
        image: productCurrent.image,
        quantity: (productCurrent.quantity! + 1)
      };
      newStateFilter.push(productIns);

      const newState: any = {
        total: state.total,
        totalPrice: state.totalPrice + product.price,
        data: [...newStateFilter]
      };
      newState.data.sort((a: any, b: any) => a.id - b.id);
      return newState;
    }

    let productIns = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    };

    const newState: any = {
      total: state.total + 1,
      totalPrice: state.totalPrice + product.price,
      data: [...state.data, productIns]
    };

    newState.data.sort((a: any, b: any) => a.id - b.id);
    return newState;
  }
  ),
  on(removeProduct, (state, product) => {
    const productCurrent = state.data.filter(item => item.id === product.id)[0];
    if (productCurrent.quantity! > 1) {
      const newStateFilter = state.data.filter(item => item.id !== product.id);

      const productIns = {
        id: productCurrent.id,
        name: productCurrent.name,
        price: productCurrent.price,
        image: productCurrent.image,
        quantity: (productCurrent.quantity! - 1)
      };
      newStateFilter.push(productIns);

      const newState: any = {
        total: state.total,
        totalPrice: product.price ? state.totalPrice - product.price : state.totalPrice,
        data: [...newStateFilter]
      };
      newState.data.sort((a: any, b: any) => a.id - b.id);
      return newState;

    }
    const newState: any = { ...state };
    newState.total = state.total - 1;
    newState.totalPrice = product.price ? state.totalPrice - product.price : state.totalPrice;
    newState.data = state.data.filter(item => item.id !== product.id).sort((a: any, b: any) => a.id - b.id);
    return newState;
  }
  ),
  on(clearProduct, (state, product) => {
    const newState: any = { ...state };
    newState.total = state.total - 1;
    newState.totalPrice = product.price ? state.totalPrice - (product.quantity! * product.price) : state.totalPrice;
    newState.data = state.data.filter(item => item.id !== product.id).sort((a: any, b: any) => a.id - b.id);
    return newState;
  }),
  on(clearCart, () => {
    const newState = { ...initialState };
    return newState;
  })
);
