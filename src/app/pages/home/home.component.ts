import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/data/store';
import * as ProductsActions from '../../data/store/product/actions';
import * as UserActions from '../../data/store/user/actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public form: FormGroup;

  constructor(private store: Store<RootState>) {
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }
  ngOnInit(): void {
    // this.store.dispatch(
    //   UserActions.login({
    //     email: 'john@mail.com',
    //     password: 'changeme',
    //   })
    // );
    // this.store.dispatch(
    //   ProductsActions.getProductsByParams({
    //     params: {
    //       categoryId: 1,
    //       priceMin: 1,
    //       priceMax: 10,
    //     },
    //     callback() {
    //       console.log('te miro y te navego');
    //     },
    //   })
    // );
  }

  findByParam(param: string) {
    return this.store.dispatch(
      ProductsActions.getProductsByParams({
        params: {
          title: param,
        },
        callback() {
          console.log('te miro y te navego');
        },
      })
    );
  }
}
