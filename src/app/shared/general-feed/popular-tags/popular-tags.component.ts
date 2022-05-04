import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getPopularTagsAction} from "./store/actions/get-populra-tags.action";
import {Observable} from "rxjs";
import {PopularTagType} from "../../types/popular-tag.type";
import {popularTagsErrorSelector, popularTagsIsLoadingSelector, popularTagsSelector} from "./store/selectors";

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss', '../tags/tag-list.component.scss']
})
export class PopularTagsComponent implements OnInit {
  //temporally
  public tags: string[] = ['abcd', 'efgh', 'ijkl']

  // @ts-ignore
  public popularTags$: Observable<PopularTagType[] | null> = this.store.pipe(select(popularTagsSelector));
  // @ts-ignore
  public error$: Observable<string | null> = this.store.pipe(select(popularTagsErrorSelector));
  // @ts-ignore
  public isLoading$: Observable<boolean> = this.store.pipe(select(popularTagsIsLoadingSelector));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void{
    this.store.dispatch(getPopularTagsAction());
  }
}
