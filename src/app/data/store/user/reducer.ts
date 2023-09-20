import { createReducer, on } from '@ngrx/store';
import { UserState, initialState } from './state';
import * as UserActions from './actions';

export const reducer = createReducer(
  initialState,

  on(
    UserActions.login,
    (state): UserState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    UserActions.logout,
    (state): UserState => ({
      ...state,
      user: null,
    })
  ),

  on(UserActions.setUser, (state, { user }): UserState => {
    return {
      ...state,
      user: user,
      loading: false,
    };
  }),

  on(UserActions.setAccessToken, (state, { accessToken }): UserState => {
    return {
      ...state,
      accessToken: accessToken,
    };
  }),

  on(UserActions.loginSuccess, UserActions.getUserSuccess, (state): UserState => {
    return {
      ...state,
      loading: false,
    };
  }),

  on(
    UserActions.loginFailure,
    UserActions.getUserFailure,
    (state): UserState => ({
      ...state,
      loading: false,
    })
  )
);

export const userReducer = (state: any, action: any): UserState => reducer(state, action);
