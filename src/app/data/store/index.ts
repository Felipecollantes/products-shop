import { ActionReducerMap } from '@ngrx/store';
import { ProductState } from './product/state';
import { productReducer } from './product/reducer';
import { ProductEffects } from './product/effects';

export interface RootState {
  products: ProductState;
}
export const reducers: ActionReducerMap<RootState> = {
  products: productReducer,
};

export const effects = [ProductEffects];
