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
  apiUrl = 'https://api.escuelajs.co/api/v1/products/';
  constructor(private http: HttpClient) {
    super();
  }

  getProductDetails(id: number): Observable<ProductModel> {
    return this.http.get<ProductEntity>(`${this.apiUrl}${id}`).pipe(map(this.productMapper.mapFrom));
  }

  getProductsByParams(params: {
    title?: string;
    priceMin?: string;
    priceMax?: string;
    categoryId?: string;
  }): Observable<ProductModel[]> {
    const apiUrl = this.buildApiUrl(params.title, params.priceMin, params.priceMax, params.categoryId);
    return this.http
      .get<ProductEntity[]>(apiUrl)
      .pipe(map((response: ProductEntity[]) => response.map((item) => this.productMapper.mapFrom(item)))) as Observable<
      ProductModel[]
    >;
  }

  buildApiUrl(title?: string, priceMin?: string, priceMax?: string, categoryId?: string): string {
    let url = `${this.apiUrl}?`;
    if (title) url += `title=${title}&`;
    if (priceMin) url += `price_min=${priceMin}&`;
    if (priceMax) url += `price_max=${priceMax}&`;
    if (categoryId) url += `categoryId=${categoryId}&`;

    if (url.endsWith('&')) url = url.slice(0, -1);

    return url;
  }
}
