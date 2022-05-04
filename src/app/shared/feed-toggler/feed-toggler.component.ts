import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedInSelector} from "../../auth/store/selectors";

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent {
  @Input() tagName!: string | null;
  // @ts-ignore
  public isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector))

  constructor(private store: Store) { }

}
