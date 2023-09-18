import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/domain/product/models/product.model';
import { UserModel } from 'src/app/domain/user/models/user.model';
import { Token } from '../../repositories/user/user-implementation.repository';

export const setUser = createAction('[USER] Set User', props<{ user: UserModel }>());
export const setAccessToken = createAction('[USER] Set Access Token', props<{ accessToken: Token }>());

export const login = createAction('[USER] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[USER] Login Success');
export const loginFailure = createAction('[USER] Login Failure', props<{ loginError: string }>());

export const getUser = createAction('[USER] Get User');
export const getUserSuccess = createAction('[USER] Get User Success', props<{ user: UserModel }>());
export const getUserFailure = createAction('[USER] Get User Failure');
