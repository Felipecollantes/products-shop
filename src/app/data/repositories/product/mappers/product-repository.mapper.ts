import { Mapper } from 'src/app/base/mapper';
import { ProductEntity } from '../entities/product-entity';
import { ProductModel } from 'src/app/domain/product/models/product.model';

export class ProductImplementationRepositoryMapper extends Mapper<ProductEntity, ProductModel> {
  mapFrom(param: ProductEntity): ProductModel {
    return { ...param };
  }
  mapTo(param: ProductModel): ProductEntity {
    return { ...param };
  }
}
