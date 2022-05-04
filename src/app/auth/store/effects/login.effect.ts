import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {AuthService} from "../../../shared/services/auth.service";
import {ICurrentUser} from "../../../shared/types/currentUser.interface";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {loginAction, loginSuccessAction, loginFailureAction} from "../actions/login.action";

@Injectable()
export class LoginEffect{
  login$ = createEffect( ()=> this.actions$.pipe(
    ofType(loginAction),
    switchMap( (request) => {
      return this.authService.login(request.user).pipe(
        map((curUser: ICurrentUser) => {
          this.persistanceService.set('accessToken', curUser.token);
          return loginSuccessAction({currentUser: curUser});
        }),
        catchError( (errorResponse: HttpErrorResponse) =>{
          return of(loginFailureAction({errors: errorResponse.error}));
        })
      );
    })
  ))

  redirectAfterSubmit$ = createEffect( ()=> this.actions$.pipe(
    ofType(loginSuccessAction),
    tap( ()=>{
      console.log('success');
      this.router.navigate(['/'])
    })
  ), {dispatch: false})

  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService,
              private router: Router) {
  }
}
