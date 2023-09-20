import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/data/store';
import * as UserActions from '../../data/store/user/actions';
import * as FromUser from '../../data/store/user/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public user$ = this.store.select(FromUser.selectUser);
  public loading$: Observable<boolean> = this.store.select(FromUser.selectLoading);
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<RootState>) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }



  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      this.store.dispatch(UserActions.login({ email, password }));
    }
  }

  logout(){
    this.store.dispatch(UserActions.logout())
  }
}
