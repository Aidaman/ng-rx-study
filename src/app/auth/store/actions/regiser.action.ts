import {createAction, props} from "@ngrx/store";
import {actionTypes} from "../action-types";
import {IRegisterRequestWrapped} from "../../types/registerRequest.interface";
import {ICurrentUser} from "../../../shared/types/currentUser.interface";
import {IBackendErrors} from "../../../shared/types/backend-errors.interface";

export const registerAction = createAction(
  actionTypes.REGISTER,
  props<IRegisterRequestWrapped>()
)

export const registerSuccessAction = createAction(
  actionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
)

export const registerFailureAction = createAction(
  actionTypes.REGISTER_FAILURE,
  props<{errors: IBackendErrors}>()
)
