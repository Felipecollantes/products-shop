import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RootState } from 'src/app/data/store';
import { ProductModel } from 'src/app/domain/product/models/product.model';
import * as FromProducts from '../../data/store/product/selectors';
import * as ProductsActions from '../../data/store/product/actions';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
export class ListProductsComponent implements OnInit {
  public form: FormGroup;
  public inputTitle: string = '';
  public inputCategory: number = 0;
  public inputPriceMin: number = 0;
  public inputPriceMax: number = 0;
  public paramTitle: string = '';
  public paramCategory: number = 0;
  public paramPriceMin: number = 0;
  public paramPriceMax: number = 0;
  public readonly products$: Observable<ProductModel[]> = this.store.select(FromProducts.selectProductsList);
  public readonly loading$: Observable<boolean> = this.store.select(FromProducts.selectLoading);

  constructor(private store: Store<RootState>, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      title: new FormControl(''),
      category: new FormControl(''),
      priceMin: new FormControl(''),
      priceMax: new FormControl(''),
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.paramTitle = params['title'] || '';
      this.paramCategory = params['categoryId'] || 0;
      this.paramPriceMin = params['priceMin'] ? +params['priceMin'] : 0;
      this.paramPriceMax = params['priceMax'] ? +params['priceMax'] : 0;
      if (this.paramTitle || this.paramCategory || this.paramPriceMin || this.paramPriceMax) {
        this.findByParam();
      }
    });
  }
  ngOnInit(): void {
    this.products$.subscribe((products) => {
      console.log('Products', products);
    });
  }

  public trackByBeers(_: number, store: ProductModel): number {
    return store.id;
  }

  setParams() {
    const queryParams = {} as QueryParams;

    if (this.inputTitle) {
      queryParams.title = this.inputTitle;
    }

    if (this.inputCategory !== 0) {
      queryParams.categoryId = this.inputCategory;
    }

    if (this.inputPriceMin !== 0) {
      queryParams.priceMin = this.inputPriceMin;
      queryParams.priceMax = 9999;
    }

    if (this.inputPriceMax !== 0) {
      queryParams.priceMax = this.inputPriceMax;
      queryParams.priceMin = 1;
    }
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
    });
  }

  findByParam() {
    this.store.dispatch(
      ProductsActions.getProductsByParams({
        params: {
          title: this.paramTitle,
          categoryId: this.paramCategory,
          priceMin: this.paramPriceMin,
          priceMax: this.paramPriceMax,
        },
      })
    );
  }

  setTitle(value: string) {
    this.inputTitle = value;
  }
  setCategory(value: string) {
    debugger;
    this.inputCategory = +value;
  }
  setPriceMin(value: string) {
    this.inputPriceMin = +value;
  }
  setPriceMax(value: string) {
    this.inputPriceMax = +value;
  }
}
