import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CategoryActions from './actions';
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

  constructor(private readonly actions$: Actions, private categoryRepository: CategoryImplementationRepository) {}
}
