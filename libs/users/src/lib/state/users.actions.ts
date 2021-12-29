import { User } from './../models/user';
import { createAction, props } from '@ngrx/store';





export const buildUserSession = createAction('[Users] build user session',);

export const init = createAction('[Users Page] Init');

export const buildUserSessionSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ user: User }>()
);

export const buildUserSessionFailed = createAction(
  '[Users] Build  Users Sessions failed');
