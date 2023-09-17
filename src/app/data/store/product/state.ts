import { ProductModel } from 'src/app/domain/product/models/product.model';

export interface ProductState {
  products: ProductModel[];
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
};
