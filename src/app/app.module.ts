import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {BackendErrorMessagesModule} from "./shared/backend-error-messages/backend-error-messages.module";
import {TopBarModule} from "./shared/top-bar/top-bar.module";
import {AuthInterceptorService} from "./shared/services/auth.interceptor.service";
import {GlobalFeedModule} from "./global-feed/global-feed.module";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {YourFeedModule} from "./your-feed/your-feed.module";
import {TagFeedModule} from "./shared/tag-feed/tag-feed.module";
import {ArticlesModule} from "./articles/articles.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TopBarModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      // autoPause: true,
    }),
    BackendErrorMessagesModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticlesModule,

    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
