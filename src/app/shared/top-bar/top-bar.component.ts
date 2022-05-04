import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ICurrentUser} from "../types/currentUser.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from "../../auth/store/selectors";

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  // @ts-ignore
  public isLoggedIn$: Observable<boolean> = this.store.pipe(select(isLoggedInSelector));
  // @ts-ignore
  public isAnonymous$: Observable<boolean>  = this.store.pipe(select(isAnonymousSelector));
  // @ts-ignore
  public currentUser$: Observable<ICurrentUser | null> = this.store.pipe(select(currentUserSelector));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
