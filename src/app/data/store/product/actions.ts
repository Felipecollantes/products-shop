import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/domain/product/models/product.model';

export const getProducts = createAction('[PRODUCT] Get Products by title', props<{ title: string }>());
export const getProductsSuccess = createAction('[PRODUCT] Get Products Success', props<{ response: ProductModel[] }>());
export const getProductsFailure = createAction('[PRODUCT] Get Products Failure');
