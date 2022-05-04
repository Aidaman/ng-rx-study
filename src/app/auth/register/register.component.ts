import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../store/actions/regiser.action";
import {Observable} from "rxjs";
import {isSubmittingSelector, validationErrorsSelector} from "../store/selectors";
import {AuthService} from "../../shared/services/auth.service";
import {IRegisterRequestWrapped} from "../types/registerRequest.interface";

@Component({
  selector: 'mc-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    username: [null, [Validators.required]],
    email: ['null', [Validators.required]],
    password: [null, [Validators.required]],
  });
  // @ts-ignore
  public isSubmitting$: Observable<boolean> = this.store.pipe(select(isSubmittingSelector));
  // @ts-ignore
  public backendErrors$ = this.store.pipe(select(validationErrorsSelector));

  constructor(private fb: FormBuilder,
              private store:Store,
              private authService: AuthService) { }

  ngOnInit(): void {}

  public onSubmit(): void {
    console.log(this.form.value);
    const req: IRegisterRequestWrapped = {user: this.form.value}
    this.store.dispatch(registerAction(req));
  }
}
