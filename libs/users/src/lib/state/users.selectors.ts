import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY,  UsersPartialState, UsersState } from './users.reducer';


// Lookup the 'Users' feature state managed by NgRx
export const getUsersState = createFeatureSelector<UsersPartialState, UsersState>(
  USERS_FEATURE_KEY
);

export const getUsers = createSelector(getUsersState, (state: UsersState) => state.user);

export const getUserIsAuth = createSelector(getUsersState, (state: UsersState) => state.isAuthenticated);