import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isSubmittingSelector, validationErrorsSelector} from "../store/selectors";
import {ILoginRequestWrapped} from "../types/login-request.interface";
import {loginAction} from "../store/actions/login.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    email: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  // @ts-ignore
  public isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector));
  // @ts-ignore
  public backendErrors$ = this.store.pipe(select(validationErrorsSelector));

  constructor(private fb: FormBuilder,
              private store:Store) { }

  ngOnInit(): void {}

  public onSubmit(): void {
    console.log(this.form.value);
    const req: ILoginRequestWrapped = {user: this.form.value}
    this.store.dispatch(loginAction(req));
  }
}
