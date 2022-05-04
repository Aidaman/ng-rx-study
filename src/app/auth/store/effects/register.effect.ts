import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {registerAction, registerFailureAction, registerSuccessAction} from "../actions/regiser.action";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {AuthService} from "../../../shared/services/auth.service";
import {ICurrentUser} from "../../../shared/types/currentUser.interface";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffect{
  register$ = createEffect( ()=> this.actions$.pipe(
    ofType(registerAction),
    switchMap( (request) => {
      return this.authService.register(request.user).pipe(
        map((curUser: ICurrentUser) => {
          this.persistanceService.set('accessToken', curUser.token);
          return registerSuccessAction({currentUser: curUser});
        }),
        catchError( (errorResponse: HttpErrorResponse) =>{
          return of(registerFailureAction({errors: errorResponse.error}));
        })
      );
    })
  ))

  redirectAfterSubmit$ = createEffect( ()=> this.actions$.pipe(
    ofType(registerSuccessAction),
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
