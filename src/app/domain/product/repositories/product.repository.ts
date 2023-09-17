import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
export abstract class ProductRepository {
  abstract getProductsByTitle(title: string): Observable<ProductModel[]>;
}
