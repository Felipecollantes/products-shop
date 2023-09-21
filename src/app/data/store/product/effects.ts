import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, tap } from 'rxjs/operators';
import * as ProductActions from './actions';
import { ProductImplementationRepository } from '../../repositories/product/product-implementation.repository';

@Injectable()
export class ProductEffects {
  public getProductsByParams$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductsByParams),
      mergeMap(({ params, callback }) =>
        this.productRepository.getProductsByParams(params).pipe(
          map((response) => {
            return ProductActions.getProductsSuccess({ response, callback });
          }),
          catchError(() => of(ProductActions.getProductsFailure()))
        )
      )
    )
  );

  public getProductsSuccess$: Observable<unknown> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.getProductsSuccess),
        filter(({ callback }) => !!callback),
        tap(({ callback }) => {
          if (callback) {
            callback();
          }
        })
      ),
    { dispatch: false }
  );

  public getProductDetail$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProductDetail),
      mergeMap(({ id }) =>
        this.productRepository.getProductDetails(id).pipe(
          map((response) => {
            return ProductActions.getProductDetailSuccess({ response });
          }),
          catchError(() => of(ProductActions.getProductDetailFailure()))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private productRepository: ProductImplementationRepository) {}
}
