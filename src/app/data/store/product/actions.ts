import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/domain/product/models/product.model';

export const getProductsByParams = createAction(
  '[PRODUCT] Get Products by params',
  props<{
    params: {
      title?: string;
      priceMin?: number;
      priceMax?: number;
      categoryId?: number;
    };
  }>()
);
export const getProductsSuccess = createAction('[PRODUCT] Get Products Success', props<{ response: ProductModel[] }>());
export const getProductsFailure = createAction('[PRODUCT] Get Products Failure');
