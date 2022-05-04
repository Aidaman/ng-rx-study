import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getFeedAction} from "./store/actions/get-feed.action";
import {Observable, Subscription} from "rxjs";
import {IGetFeedResponse} from "./types/get-feed-response.interface";
import {errorSelector, feedSelector, isLoadingSelector} from "./store/selectors";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {parseUrl, stringify} from 'query-string'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnChanges, OnDestroy {
  @Input() apiUrl: string = '';
  private qpSubscription!: Subscription;

  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public feed$!: Observable<IGetFeedResponse | null>;

  public limit: number = environment.limit;
  public currentPage: any;
  public baseUrl: string = this.router.url.split('?')[0];


  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    // @ts-ignore
    this.error$ = this.store.pipe(select(errorSelector));
    // @ts-ignore
    this.feed$ = this.store.pipe(select(feedSelector));

    this.qpSubscription = this.route.queryParams.subscribe( (params: Params)=>{
      this.currentPage = +params.page;
      this.fetchfeed();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanded = !changes.apiUrl.firstChange && changes.apiUrl.currentValue !== changes.apiUrl.previousValue;
    if (isApiUrlChanded){
      this.fetchfeed();
    }
  }

  ngOnDestroy(): void {
    this.qpSubscription.unsubscribe();
  }

  private fetchfeed(){
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset, ...parsedUrl.query
    })
    const fullApiUrl = `${parsedUrl.url}?${stringifiedParams}`;
    console.log('parsedUrl', fullApiUrl);
    this.store.dispatch(getFeedAction({url: fullApiUrl}));
  }
}
