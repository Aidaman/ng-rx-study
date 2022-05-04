import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/reducers";
import {AuthService} from "../shared/services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";
import {BackendErrorMessagesModule} from "../shared/backend-error-messages/backend-error-messages.module";
import {LoginEffect} from "./store/effects/login.effect";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule,

    AuthRoutingModule,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
