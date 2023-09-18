import { createReducer, on } from '@ngrx/store';
import * as UserActions from './actions';
import { ProductState, initialState } from './state';

export const reducer = createReducer(
  initialState,

  on(
    UserActions.getProductsByParams,
    (state): ProductState => ({
      ...state,
      loading: true,
    })
  ),

  on(UserActions.getProductsSuccess, (state, { response }): ProductState => {
    return {
      ...state,
      products: response,
      loading: false,
    };
  }),

  on(
    UserActions.getProductsFailure,
    (state): ProductState => ({
      ...state,
      loading: false,
    })
  )
);

export const productReducer = (state: any, action: any): ProductState => reducer(state, action);
