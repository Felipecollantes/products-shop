import { ActionReducerMap } from '@ngrx/store';
import { ProductState } from './product/state';
import { productReducer } from './product/reducer';
import { ProductEffects } from './product/effects';
import { UserState } from './user/state';
import { userReducer } from './user/reducer';
import { UserEffects } from './user/effects';
import { CategoryState } from './category/state';
import { categoryReducer } from './category/reducer';
import { CategoryEffects } from './category/effects';

export interface RootState {
  products: ProductState;
  user: UserState;
  categories: CategoryState;
}

export const reducers: ActionReducerMap<RootState> = {
  products: productReducer,
  user: userReducer,
  categories: categoryReducer,
};

export const effects = [ProductEffects, UserEffects, CategoryEffects];
