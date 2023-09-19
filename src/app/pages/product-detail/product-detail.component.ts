import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as FromProducts from '../../data/store/product/selectors';
import * as ProductActions from '../../data/store/product/actions';
import { RootState } from 'src/app/data/store';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/domain/product/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {
  public readonly productDetail$: Observable<ProductModel | null> = this.store.select(FromProducts.selectProductDetail);
  constructor(private route: ActivatedRoute, private store: Store<RootState>) {}

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) this.store.dispatch(ProductActions.getProductDetail({ id }));
  }
}
