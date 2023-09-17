import { Injectable } from '@angular/core';
import { ProductImplementationRepositoryMapper } from './mappers/product-repository.mapper';
import { ProductModel } from 'src/app/domain/product/models/product.model';
import { ProductRepository } from 'src/app/domain/product/repositories/product.repository';
import { Observable } from 'rxjs';
import { ProductEntity } from './entities/product-entity';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductImplementationRepository extends ProductRepository {
  productMapper = new ProductImplementationRepositoryMapper();
  constructor(private http: HttpClient) {
    super();
  }

  getProductsByTitle(title: string): Observable<ProductModel[]> {
    return this.http
      .get<ProductEntity[]>(`https://api.escuelajs.co/api/v1/products/?title=${title}`)
      .pipe(map((response: ProductEntity[]) => response.map((item) => this.productMapper.mapFrom(item)))) as Observable<
      ProductModel[]
    >;
  }
}
