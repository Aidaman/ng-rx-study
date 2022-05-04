import {ICurrentUser} from "../../shared/types/currentUser.interface";
import {IBackendErrors} from "../../shared/types/backend-errors.interface";

export interface IAuthState {
  isSubmitting: boolean,
  isLoggedIn: boolean | null,
  currentUser: ICurrentUser | null,
  validationErrors: IBackendErrors | null,
  isLoading: boolean,
}
