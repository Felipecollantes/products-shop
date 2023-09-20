import { createAction, props } from '@ngrx/store';
import { CategoryModel } from 'src/app/domain/category/models/category.mode';

export const getCategories = createAction('[Category] Get Categories');
export const getCategoriesSuccess = createAction(
  '[Category] Get Categories Success',
  props<{ response: CategoryModel[] }>()
);
export const getCategoriesFailure = createAction('[Category] Get Categories Failure');
