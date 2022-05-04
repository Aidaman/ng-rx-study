import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {GlobalFeedComponent} from "./global-feed/global-feed.component";
import {YourFeedComponent} from "./your-feed/your-feed.component";
import {TagFeedComponent} from "./shared/tag-feed/tag-feed.component";
import {ArticlesComponent} from "./articles/articles.component";

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full',},
  {path: 'feed', component: GlobalFeedComponent,},
  {path: 'your-feed', component: YourFeedComponent,},
  {path: 'tags/:slug', component: TagFeedComponent,},
  {path: 'articles/:slug', component: ArticlesComponent,},
  {path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then( (m) => m.AuthModule ),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
