import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list.component';
import {GetPopularTagsService} from "../../services/get-popular-tags.service";



@NgModule({
  declarations: [
    TagListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TagListComponent
  ], providers: [
    GetPopularTagsService
  ]
})
export class TagListModule { }
