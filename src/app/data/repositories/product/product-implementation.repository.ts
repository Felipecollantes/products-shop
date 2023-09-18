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

  getProductDetails(id: number): Observable<ProductModel> {
    return this.http
      .get<ProductEntity>(`https://api.escuelajs.co/api/v1/products/${id}`)
      .pipe(map(this.productMapper.mapFrom));
  }

  getProductsByParams(params: {
    title?: string;
    priceMin?: number;
    priceMax?: number;
    categoryId?: number;
  }): Observable<ProductModel[]> {
    const apiUrl = this.buildApiUrl(params.title, params.priceMin, params.priceMax, params.categoryId);

    return this.http
      .get<ProductEntity[]>(apiUrl)
      .pipe(map((response: ProductEntity[]) => response.map((item) => this.productMapper.mapFrom(item)))) as Observable<
      ProductModel[]
    >;
  }

  buildApiUrl(title?: string, priceMin?: number, priceMax?: number, categoryId?: number): string {
    let apiUrl = 'https://api.escuelajs.co/api/v1/products/?';

    if (title) apiUrl += `title=${title}&`;
    if (priceMin) apiUrl += `price_min=${priceMin}&`;
    if (priceMax) apiUrl += `price_max=${priceMax}&`;
    if (categoryId) apiUrl += `categoryId=${categoryId}&`;

    if (apiUrl.endsWith('&')) apiUrl = apiUrl.slice(0, -1);

    return apiUrl;
  }
}
