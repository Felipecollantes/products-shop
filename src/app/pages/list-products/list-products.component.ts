import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { RootState } from 'src/app/data/store';
import { ProductModel } from 'src/app/domain/product/models/product.model';
import * as FromProducts from '../../data/store/product/selectors';
import * as ProductsActions from '../../data/store/product/actions';
import * as FromCategories from '../../data/store/category/selectors';
import * as CategoriesActions from '../../data/store/category/actions';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PATHS } from 'src/app/core/constants/path.const';
import { CategoryModel } from 'src/app/domain/category/models/category.mode';

interface QueryParams {
  title: string;
  categoryId: number;
  priceMin: number;
  priceMax: number;
}
@Component({
  selector: 'list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  public form = {} as FormGroup;
  public readonly products$: Observable<ProductModel[]> = this.store.select(FromProducts.selectProductsList);
  public readonly loading$: Observable<boolean> = this.store.select(FromProducts.selectLoading);
  public readonly category$ = this.store.select(FromCategories.selectCategories);

  constructor(
    private fb: FormBuilder,
    private store: Store<RootState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.initForm();
    this.getParam();
    this.store.dispatch(CategoriesActions.getCategories())
  }



  initForm() {
    this.form = this.fb.group(
      {
        title: [''],
        category: [''],
        priceMin: [''],
        priceMax: [''],
      },
      {
        asyncValidators: [this.atLeastOneFieldRequiredValidator()],
      }
    );
  }

  getParam() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const { title, categoryId, priceMin, priceMax } = params;
      if (title || categoryId || priceMin || priceMax) {
        this.findByParam(title, categoryId, priceMin, priceMax);
      }
    });
  }

  setParams() {
    if (this.form.valid) {
      const queryParams = this.buildQueryParams();
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
      });
      this.form.reset();
    }
  }

  buildQueryParams() {
    const { title, category, priceMin, priceMax } = this.form.value;
    const queryParams = {} as QueryParams;

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

    return queryParams;
  }

  atLeastOneFieldRequiredValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        const hasValue = Object.keys(control.value).some(
          (key) => control.value[key] !== null && control.value[key] !== ''
        );

        if (hasValue) {
          resolve(null);
        } else {
          resolve({ atLeastOneFieldRequired: true });
        }
      });
    };
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
    this.router.navigate([`/${PATHS.listProducts}/${PATHS.productDetail}`, product.id]);
  }

  public trackByProducts(_: number, store: ProductModel): number {
    return store.id;
  }
}
