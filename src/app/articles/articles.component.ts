import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {getArticleAction} from "./store/actions/get-article.action";
import {articleSelector, errorSelector, isLoadingSelector} from "./store/selectors";
import {combineLatest, Observable} from "rxjs";
import {currentUserSelector} from "../auth/store/selectors";
import {map} from "rxjs/operators";
import {IArticle} from "../shared/types/article.interface";
import {ICurrentUser} from "../shared/types/currentUser.interface";

@Component({
  selector: 'mc-feed',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public slug: string = this.route.snapshot.params['slug'];
  // @ts-ignore
  public article$ = this.store.pipe(select(articleSelector))
  // @ts-ignore
  public isLoading$ = this.store.pipe(select(errorSelector))
  // @ts-ignore
  public error$ = this.store.pipe(select(isLoadingSelector))

  public isAuthor$: Observable<boolean> = combineLatest(
    // @ts-ignore
    this.store.pipe(select(articleSelector)),
    // @ts-ignore
    this.store.pipe(select(currentUserSelector)),
  ).pipe(map(([article, currentUser]) => {
    if (!article && !currentUser) return false;
    console.log('map', article, currentUser)
    return article?.author.username === currentUser?.username;
  }))

  constructor(private store: Store, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.fetchData();
  }
  private fetchData(): void {
    this.store.dispatch(getArticleAction({slugStr: this.slug}));
  }
}
