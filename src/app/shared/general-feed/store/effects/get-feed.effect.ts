import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FeedService} from "../../../services/feed.service";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "../actions/get-feed.action";
import {IGetFeedResponse} from "../../types/get-feed-response.interface";

@Injectable()
export class GetFeedEffect{
  getFeed$ = createEffect( ()=> this.actions$.pipe(
    ofType(getFeedAction),
    switchMap( ({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feed: IGetFeedResponse) => {
          return getFeedSuccessAction({feed});
        }),
        catchError( (errorResponse: HttpErrorResponse) =>{
          return of(getFeedFailureAction());
        })
      );
    })
  ))

  constructor(private actions$: Actions,
              private feedService: FeedService) {
  }
}
