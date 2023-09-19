import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/app/data/store';
import { ProductModel } from 'src/app/domain/product/models/product.model';
import * as FromProducts from '../../data/store/product/selectors';
import * as ProductsActions from '../../data/store/product/actions';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS } from 'src/app/core/constants/path.const';

interface QueryParams {
  title: string;
  categoryId: number;
  priceMin: number;
  priceMax: number;
}
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  public form = {} as FormGroup;
  public readonly products$: Observable<ProductModel[]> = this.store.select(FromProducts.selectProductsList);
  public readonly loading$: Observable<boolean> = this.store.select(FromProducts.selectLoading);

  constructor(private store: Store<RootState>, private router: Router, private activatedRoute: ActivatedRoute) {
    this.initForm();
    this.getParam();
  }

  public trackByBeers(_: number, store: ProductModel): number {
    return store.id;
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      priceMin: new FormControl(''),
      priceMax: new FormControl(''),
    });
  }

  getParam() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const paramTitle = params['title'] || '';
      const paramcategoryId = params['categoryId'] || '';
      const paramPriceMin = params['priceMin'] || '';
      const paramPriceMax = params['priceMax'] || '';
      if (paramTitle || paramcategoryId || paramPriceMin || paramPriceMax) {
        this.findByParam(paramTitle, paramcategoryId, paramPriceMin, paramPriceMax);
      }
    });
  }

  setParams() {
    const queryParams = {} as QueryParams;
    const { title, category, priceMin, priceMax } = this.form.value;
    console.log('form', this.form.value);

    if (title) queryParams.title = title;

    if (category) queryParams.categoryId = category;

    if (priceMin && !priceMax) {
      queryParams.priceMin = priceMin;
      queryParams.priceMax = 9999;
    } else if (priceMax && !priceMin) {
      queryParams.priceMax = priceMax;
      queryParams.priceMin = 1;
    } else if (priceMax && priceMin) {
      queryParams.priceMin = priceMin;
      queryParams.priceMax = priceMax;
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
    });
  }

  findByParam(title: string, categoryId: string, priceMin: string, priceMax: string) {
    this.store.dispatch(
      ProductsActions.getProductsByParams({
        params: {
          title,
          categoryId,
          priceMin,
          priceMax,
        },
      })
    );
  }

  displayDetail(product: ProductModel) {
    console.log('product navigate', product);
    this.router.navigate([`/${PATHS.listProdcuts}/${PATHS.productDetail}`, product.id]);
  }
}
