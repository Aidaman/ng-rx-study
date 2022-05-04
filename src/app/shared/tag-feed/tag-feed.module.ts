import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TagFeedComponent} from "./tag-feed.component";
import {Routes} from "@angular/router";
import {YourFeedComponent} from "../../your-feed/your-feed.component";
import {BannerModule} from "../banner/banner.module";
import {FeedTogglerModule} from "../feed-toggler/feed-toggler.module";
import {FeedModule} from "../general-feed/feed.module";
import {PopularTagsModule} from "../general-feed/popular-tags/popular-tags.module";

const routes: Routes = [
  {path: '', component: TagFeedComponent}
]

@NgModule({
  declarations: [
    TagFeedComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
  ],
  exports: [
    TagFeedComponent,
  ]
})
export class TagFeedModule { }
