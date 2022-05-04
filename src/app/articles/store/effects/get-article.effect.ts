import {Injectable} from "@angular/core";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ArticlesServise} from "../../../shared/services/articles.servise";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "../actions/get-article.action";
import {IArticle} from "../../../shared/types/article.interface";

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect( ()=> this.actions$.pipe(
    ofType(getArticleAction),
    switchMap( ({slugStr}) => {
      return this.articleService.getArticle(slugStr).pipe(
        map((article:IArticle ) => {
          return getArticleSuccessAction({article});
        }),
        catchError( (errorResponse: HttpErrorResponse) =>{
          return of(getArticleFailureAction());
        })
      );
    })
  ))

  constructor(private actions$: Actions,
              private articleService: ArticlesServise) {
  }
}
