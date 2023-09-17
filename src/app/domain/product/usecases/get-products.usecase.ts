import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProductModel } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';
export class GetProductsUseCase implements UseCase<string, ProductModel[]> {
  constructor(private productRepository: ProductRepository) {}
  execute(title: string): Observable<ProductModel[]> {
    return this.productRepository.getProductsByTitle(title);
  }
}
