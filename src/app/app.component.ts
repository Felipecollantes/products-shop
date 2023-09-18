import { getProductsUseCaseProvider } from './data/data.module';
import { Component, OnInit } from '@angular/core';
import { ProductImplementationRepositoryMapper } from './data/repositories/product/mappers/product-repository.mapper';
import { ProductImplementationRepository } from './data/repositories/product/product-implementation.repository';
import { UserImplementationRepository } from './data/repositories/user/user-implementation.repository';
import { Observable } from 'rxjs';
import { ProductModel } from './domain/product/models/product.model';
import * as FromProducts from '../app/data/store/product/selectors';
import * as ProductsActions from '../app/data/store/product/actions';
import { RootState } from './data/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'products-shop';
  public readonly products$: Observable<ProductModel[]> = this.store.select(FromProducts.selectProduct);

  constructor(
    private productRepository: ProductImplementationRepository,
    private userRepository: UserImplementationRepository,
    private store: Store<RootState>
  ) {}
  ngOnInit(): void {
    this.store.dispatch(
      ProductsActions.getProductsByParams({
        params: {
          categoryId: 1,
          priceMin: 1,
          priceMax: 10,
        },
      })
    );
    this.products$.subscribe((resp) => {
      console.log('Productos', resp);
    });
    this.productRepository.getProductDetails(5).subscribe(console.log);
  }
}
