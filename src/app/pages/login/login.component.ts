import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/data/store';
import * as UserActions from '../../data/store/user/actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<RootState>) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form', this.form.value);
    if (this.form.valid) {
      const { email, password } = this.form.value;

      this.store.dispatch(UserActions.login({ email, password }));
    }
  }
}
