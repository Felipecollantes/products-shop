import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { UserState } from './state';

const selectFeature = (state: RootState): UserState => state.user;
export const selectLoading = createSelector(selectFeature, (state) => state.loading);
export const selectUser = createSelector(selectFeature, (state) => state.user);
export const selectRole = createSelector(selectFeature, (state) => state.user?.role);

export const selectToken = createSelector(selectFeature, (state) => state.accessToken);
