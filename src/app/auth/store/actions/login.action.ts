import {createAction, props} from "@ngrx/store";
import {actionTypes} from "../action-types";
import {ICurrentUser} from "../../../shared/types/currentUser.interface";
import {IBackendErrors} from "../../../shared/types/backend-errors.interface";
import {ILoginRequestWrapped} from "../../types/login-request.interface";

export const loginAction = createAction(
  actionTypes.LOGIN,
  props<ILoginRequestWrapped>()
)

export const loginFailureAction = createAction(
  actionTypes.LOGIN_FAILURE,
  props<{errors: IBackendErrors}>()
)

export const loginSuccessAction = createAction(
  actionTypes.LOGIN_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

