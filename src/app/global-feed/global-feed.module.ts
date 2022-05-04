import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './global-feed.component';
import {RouterModule, Routes} from "@angular/router";
import {FeedModule} from "../shared/general-feed/feed.module";
import {BannerModule} from "../shared/banner/banner.module";
import {PopularTagsModule} from "../shared/general-feed/popular-tags/popular-tags.module";
import {FeedTogglerModule} from "../shared/feed-toggler/feed-toggler.module";

const routes: Routes = [{path: '', component: GlobalFeedComponent}]

@NgModule({
  declarations: [
    GlobalFeedComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedTogglerModule,
    ]
})
export class GlobalFeedModule { }
