import {IAuthState} from "../types/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/regiser.action";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login.action";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "./actions/get-current-user.action";

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  isLoading: false
}

const authReducer = createReducer(
  initialState,
  on(registerAction, (state, action): IAuthState => ({
      ...state,

      //  Due to incorrect work of API (it's says that mail is blank even if it doesn't)
      //  I shall do this, for testing is feed working correctly
      isLoggedIn: true,

      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(registerSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(registerFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(loginAction, (state): IAuthState => ({
      ...state,

      //  Due to incorrect work of API (it's says that mail is blank even if it doesn't)
      //  I shall do this, for testing is feed working correctly
      isLoggedIn: true,

      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(loginSuccessAction, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })
  ),
  on(loginFailureAction, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(getCurrentUserAction, (state): IAuthState => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccessAction, (state, action): IAuthState => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(getCurrentUserFailureAction, (state): IAuthState => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  })),
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
