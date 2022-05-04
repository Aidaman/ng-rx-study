import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "../actions/get-populra-tags.action";
import {GetPopularTagsService} from "../../../../services/get-popular-tags.service";
import {PopularTagType} from "../../../../types/popular-tag.type";

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect( ()=> this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap( () => {
      return this.getPopularTagsService.getPopularTags().pipe(
        map((popularTags: PopularTagType[]) => {
          return getPopularTagsSuccessAction({popularTags});
        }),
        catchError( () =>{
          return of(getPopularTagsFailureAction());
        })
      );
    })
  ))

  constructor(private actions$: Actions,
              private getPopularTagsService: GetPopularTagsService) {
  }
}
