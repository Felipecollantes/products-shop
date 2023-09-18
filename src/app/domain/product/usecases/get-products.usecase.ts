import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ProductModel } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';
export class GetProductsUseCase
  implements
    UseCase<
      {
        title?: string;
        priceMin?: number;
        priceMax?: number;
        categoryId?: number;
      },
      ProductModel[]
    >
{
  constructor(private productRepository: ProductRepository) {}
  execute(params: {
    title?: string;
    priceMin?: number;
    priceMax?: number;
    categoryId?: number;
  }): Observable<ProductModel[]> {
    return this.productRepository.getProductsByParams(params);
  }
}
