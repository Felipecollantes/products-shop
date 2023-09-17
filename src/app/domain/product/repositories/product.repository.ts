import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
export abstract class ProductRepository {
  abstract getProducts(): Observable<ProductModel>;
}
