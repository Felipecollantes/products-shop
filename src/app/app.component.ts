import { Component, OnInit } from '@angular/core';
import * as UserActions from './data/store/user/actions';
import { RootState } from './data/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'products-shop';

  constructor(private store: Store<RootState>) {
    const user = JSON.parse(`${localStorage.getItem('user')}`);
    if (user) this.store.dispatch(UserActions.setUser({ user }));
  }
  ngOnInit(): void {}
}
