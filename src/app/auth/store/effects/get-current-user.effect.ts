import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {AuthService} from "../../../shared/services/auth.service";
import {ICurrentUser} from "../../../shared/types/currentUser.interface";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../actions/get-current-user.action";

@Injectable()
export class getCurrentUserEffect{
  getCurrentUser$ = createEffect( ()=> this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap( () => {
      return this.authService.getCurrentUser().pipe(
        map((curUser: ICurrentUser) => {
          console.log(curUser);
          return getCurrentUserSuccessAction({currentUser: curUser});
        }),
        catchError( (errorResponse: HttpErrorResponse) =>{
          console.log(errorResponse);
          return of(getCurrentUserFailureAction());
        })
      );
    })
  ))

  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService) {
    console.log('enterred')
  }
}
