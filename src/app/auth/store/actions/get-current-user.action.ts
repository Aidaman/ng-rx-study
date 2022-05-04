import {createAction, props} from "@ngrx/store";
import {actionTypes} from "../action-types";
import {ICurrentUser} from "../../../shared/types/currentUser.interface";

export const getCurrentUserAction = createAction(
  actionTypes.GET_CURRENT_USER,
);
export const getCurrentUserSuccessAction = createAction(
  actionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
);
export const getCurrentUserFailureAction = createAction(
  actionTypes.GET_CURRENT_USER_FAILURE,
);
