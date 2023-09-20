import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from './actions';
import { CategoryState, initialState } from './state';

export const reducer = createReducer(
  initialState,

  on(
    CategoryActions.getCategories,
    (state): CategoryState => ({
      ...state,
    })
  ),

  on(CategoryActions.getCategoriesSuccess, (state, { response }): CategoryState => {
    return {
      ...state,
      categories: response,
    };
  }),



  on(
    CategoryActions.getCategoriesFailure,
    (state): CategoryState => ({
      ...state,
    })
  )
);

export const categoryReducer = (state: any, action: any): CategoryState => reducer(state, action);
