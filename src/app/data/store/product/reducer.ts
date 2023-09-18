import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './actions';
import { ProductState, initialState } from './state';

export const reducer = createReducer(
  initialState,

  on(
    ProductActions.getProductsByParams,
    ProductActions.getProductDetail,
    (state): ProductState => ({
      ...state,
      loading: true,
    })
  ),

  on(ProductActions.getProductsSuccess, (state, { response }): ProductState => {
    return {
      ...state,
      products: response,
      loading: false,
    };
  }),

  on(ProductActions.getProductDetailSuccess, (state, { response }): ProductState => {
    return {
      ...state,
      productDetail: response,
      loading: false,
    };
  }),

  on(
    ProductActions.getProductsFailure,
    ProductActions.getProductDetailFailure,
    (state): ProductState => ({
      ...state,
      loading: false,
    })
  )
);

export const productReducer = (state: any, action: any): ProductState => reducer(state, action);
