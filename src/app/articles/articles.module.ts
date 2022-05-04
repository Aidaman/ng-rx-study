import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import {EffectsModule} from "@ngrx/effects";
import {GetArticleEffect} from "./store/effects/get-article.effect";
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {ArticlesServise} from "../shared/services/articles.servise";
import {ErrorMessageModule} from "../shared/error-message/error-message.module";
import {TagListModule} from "../shared/general-feed/tags/tag-list.module";

@NgModule({
  declarations: [ArticlesComponent],
  exports: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    TagListModule,
  ],
  providers: [
    ArticlesServise
  ]
})
export class ArticlesModule { }
