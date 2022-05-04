import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {GlobalFeedComponent} from "../global-feed/global-feed.component";
import {BannerModule} from "../shared/banner/banner.module";
import {FeedTogglerModule} from "../shared/feed-toggler/feed-toggler.module";
import {FeedModule} from "../shared/general-feed/feed.module";
import {PopularTagsModule} from "../shared/general-feed/popular-tags/popular-tags.module";
import {YourFeedComponent} from "./your-feed.component";

const routes: Routes = [{path: '', component: YourFeedComponent}]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    PopularTagsModule,
  ],
  exports: [YourFeedComponent]
})
export class YourFeedModule { }
