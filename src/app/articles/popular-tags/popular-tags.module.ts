import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './popular-tags.component';
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {GetPopularTagsEffect} from "./store/effects/get-popular-tags.effect";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../../shared/error-message/error-message.module";



@NgModule({
    declarations: [
        PopularTagsComponent
    ],
    exports: [
        PopularTagsComponent
    ],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    ErrorMessageModule,
    RouterModule
  ]
})
export class PopularTagsModule { }
