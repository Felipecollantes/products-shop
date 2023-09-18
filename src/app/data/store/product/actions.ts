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
    callback?: () => void;
  }>()
);
export const getProductsSuccess = createAction(
  '[PRODUCT] Get Products Success',
  props<{ response: ProductModel[]; callback?: () => void }>()
);
export const getProductsFailure = createAction('[PRODUCT] Get Products Failure');

export const getProductDetail = createAction(
  '[PRODUCT] Get Product detail',
  props<{
    id: number;
  }>()
);
export const getProductDetailSuccess = createAction(
  '[PRODUCT] Get Product detail Success',
  props<{ response: ProductModel }>()
);
export const getProductDetailFailure = createAction('[PRODUCT] Get Product detail Failure');
