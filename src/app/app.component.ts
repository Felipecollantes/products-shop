import { getProductsUseCaseProvider } from './data/data.module';
import { Component, OnInit } from '@angular/core';
import { ProductImplementationRepositoryMapper } from './data/repositories/product/mappers/product-repository.mapper';
import { ProductImplementationRepository } from './data/repositories/product/product-implementation.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'products-shop';

  constructor(private test: ProductImplementationRepository) {}
  ngOnInit(): void {
    this.test.getProducts().subscribe(console.log);
  }
}
