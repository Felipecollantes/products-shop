import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, filter, map, mergeMap, tap, toArray } from 'rxjs/operators';
import * as UserActions from './actions';
import * as FromUser from './selectors';
import { RootState } from '..';
import { UserImplementationRepository } from '../../repositories/user/user-implementation.repository';

@Injectable()
export class UserEffects {
  public login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      mergeMap((request) =>
        this.userRepository.login(request).pipe(
          mergeMap((accessToken) => {
            localStorage.setItem('accessToken', JSON.stringify(accessToken.access_token));
            localStorage.setItem('refreshToken', JSON.stringify(accessToken.refresh_token));
            this.store.dispatch(UserActions.setAccessToken({ accessToken }));
            return this.userRepository.getUserProfile().pipe(
              map((user) => {
                localStorage.setItem('user', JSON.stringify(user));

                return UserActions.setUser({ user });
              }),
              catchError((error) => of(UserActions.loginFailure({ loginError: error })))
            );
          }),
          catchError((error) => of(UserActions.loginFailure({ loginError: error })))
        )
      )
    )
  );

  public logout$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.logout),
    mergeMap(() =>
      this.userRepository.logout().pipe(
        map((response) => {
          return UserActions.logoutSuccess();
        }),
        catchError((error) => of(UserActions.logoutFailure({ loginError: error })))
      )
    )
  )
);

  constructor(
    private store: Store<RootState>,
    private readonly actions$: Actions,
    private userRepository: UserImplementationRepository
  ) {}
}
