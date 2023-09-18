import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/app/data/store';
import { ProductModel } from 'src/app/domain/product/models/product.model';
import * as FromProducts from '../../data/store/product/selectors';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent implements OnInit {
  public readonly products$: Observable<ProductModel[]> = this.store.select(FromProducts.selectProductsList);

  constructor(private store: Store<RootState>) {}
  ngOnInit(): void {
    this.products$.subscribe((products) => {
      console.log('Products', products);
    });
  }
}
