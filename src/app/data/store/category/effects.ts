import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, tap, toArray } from 'rxjs/operators';
import * as CategoryActions from './actions';
import * as FromProducts from './selectors';
import { ProductImplementationRepository } from '../../repositories/product/product-implementation.repository';
import { RootState } from '..';
import { CategoryImplementationRepository } from '../../repositories/category/category-implementation.repository';

@Injectable()
export class CategoryEffects {
  public getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getCategories),
      mergeMap(() =>
        this.categoryRepository.getCategories().pipe(
          map((response) => {
            return CategoryActions.getCategoriesSuccess({ response });
          }),
          catchError(() => of(CategoryActions.getCategoriesFailure()))
        )
      )
    )
  );

//   public getProductsSuccess$: Observable<unknown> = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CategoryActions.getCategoriesSuccess),
//       mergeMap(({ response }) =>
//         this.categoryRepository.getCategories().pipe(
//           map((response) => {
//             return CategoryActions.getCategoriesSuccess({ response });
//           }),
//           catchError(() => of(CategoryActions.getCategoriesFailure()))
//         )
//       )
//     )
//   );

  constructor(
    private store: Store<RootState>,
    private readonly actions$: Actions,
    private categoryRepository: CategoryImplementationRepository
  ) {}
}
