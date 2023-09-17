import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '../domain/product/repositories/product.repository';
import { GetProductsUseCase } from '../domain/product/usecases/get-products.usecase';
import { ProductImplementationRepository } from './repositories/product/product-implementation.repository';
import { HttpClientModule } from '@angular/common/http';

const getProductsUseCaseFactory = (productRepo: ProductRepository) =>
  new GetProductsUseCase(productRepo);
export const getProductsUseCaseProvider = {
  provide: GetProductsUseCase,
  useFactory: getProductsUseCaseFactory,
  deps: [ProductRepository],
};

@NgModule({
  providers: [
    getProductsUseCaseProvider,
    { provide: ProductRepository, useClass: ProductImplementationRepository },
  ],
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
