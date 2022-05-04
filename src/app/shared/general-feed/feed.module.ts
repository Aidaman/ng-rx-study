import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/get-feed.effect";
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {FeedService} from "../services/feed.service";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {PaginationModule} from "../pagination/pagination.module";
import {TagListModule} from "./tags/tag-list.module";

@NgModule({
  declarations: [FeedComponent],
  exports: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    PaginationModule,
    TagListModule,
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
