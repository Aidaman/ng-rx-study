import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAppState} from "../../shared/types/app-state.interface";
import {IAuthState} from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
)
