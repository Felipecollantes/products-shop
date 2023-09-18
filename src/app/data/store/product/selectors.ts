import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { ProductState } from './state';

const selectFeature = (state: RootState): ProductState => state.products;
export const selectLoading = createSelector(selectFeature, (state) => state.loading);
export const selectProductsList = createSelector(selectFeature, (state) => state.products);
export const selectProductDetail = createSelector(selectFeature, (state) => state.productDetail);
