import { PATHS } from 'src/app/core/constants/path.const';
import { Component, OnInit } from '@angular/core';
import * as FromUser from '../../data/store/user/selectors';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/data/store';
import { ROLE } from 'src/app/core/enums/role-enum';

interface ItemsNavbar {
  name: string;
  routerlink: string;
}

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user$ = this.store.select(FromUser.selectUser);
  public role$ = this.store.select(FromUser.selectRole);
  public isMenuOpen: boolean = false;
  public path = PATHS;
  public role = ROLE;
  public itemsNavBar: ItemsNavbar[] = [];

  constructor(private store: Store<RootState>) {}
}
