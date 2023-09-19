import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
export abstract class ProductRepository {
  abstract getProductsByParams(params: {
    title?: string;
    priceMin?: string;
    priceMax?: string;
    categoryId?: string;
  }): Observable<ProductModel[]>;

  abstract getProductDetails(id: number): Observable<ProductModel>;
}
