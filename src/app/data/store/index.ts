import { ActionReducerMap } from '@ngrx/store';
import { ProductState } from './product/state';
import { productReducer } from './product/reducer';
import { ProductEffects } from './product/effects';
import { UserState } from './user/state';
import { userReducer } from './user/reducer';
import { UserEffects } from './user/effects';

export interface RootState {
  products: ProductState;
  user: UserState;
}

export const reducers: ActionReducerMap<RootState> = {
  products: productReducer,
  user: userReducer,
};

export const effects = [ProductEffects, UserEffects];
