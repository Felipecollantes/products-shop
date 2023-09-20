import { Component } from '@angular/core';
import * as FromUser from '../../data/store/user/selectors';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/data/store';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user$ = this.store.select(FromUser.selectUser);
  public isMenuOpen: boolean = false;

  constructor(private store: Store<RootState>) {}
}
