import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap, toArray } from 'rxjs/operators';
import * as ProductActions from './actions';
import { ProductImplementationRepository } from '../../repositories/product/product-implementation.repository';

@Injectable()
export class ProductEffects {
  public getBeersByTitle$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductsByParams),
      mergeMap(({ params }) =>
        this.productRepository.getProductsByParams(params).pipe(
          map((response) => {
            return ProductActions.getProductsSuccess({ response });
          }),
          catchError(() => of(ProductActions.getProductsFailure()))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private productRepository: ProductImplementationRepository) {}
}
