import { ProductModel } from 'src/app/domain/product/models/product.model';

export interface ProductState {
  products: ProductModel[];
  productDetail: ProductModel | null;
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  productDetail: null,
  loading: false,
};
