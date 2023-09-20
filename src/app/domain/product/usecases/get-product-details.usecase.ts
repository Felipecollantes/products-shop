import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProductModel } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';

export class GetProductDetailsUseCase implements UseCase<number, ProductModel> {
  constructor(private productRepository: ProductRepository) {}
  execute(id: number): Observable<ProductModel> {
    return this.productRepository.getProductDetails(id);
  }
}
