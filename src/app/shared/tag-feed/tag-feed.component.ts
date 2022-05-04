import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnDestroy {
  public tagName!: string;
  public apiUrl!: string;
  public tagNameSubscr: Subscription = this.route.params.subscribe( (params)=>{
    this.tagName = params.slug;
    this.apiUrl = `articles?tag=${this.tagName}`
  })

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnDestroy(): void {
    this.tagNameSubscr.unsubscribe();
  }

}
