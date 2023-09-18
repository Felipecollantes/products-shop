import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/data/store';
import * as ProductsActions from '../../data/store/product/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<RootState>) {}
  ngOnInit(): void {
    this.store.dispatch(
      ProductsActions.getProductsByParams({
        params: {
          categoryId: 1,
          priceMin: 1,
          priceMax: 10,
        },
        callback() {
          console.log('te miro y te navego');
        },
      })
    );
  }
}
