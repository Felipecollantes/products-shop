import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/data/store/product/state';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/domain/product/models/product.model';
import { PATHS } from 'src/app/core/constants/path.const';
import * as ProductsActions from '../../data/store/product/actions';

// Mocks
const mockStore = {
  select: () => of([]),
  dispatch: () => {},
};

const mockActivatedRoute = {
  queryParams: of({}),
  snapshot: {
    paramMap: {
      get: () => '',
    },
  },
};

const mockRouter = {
  navigate: () => {},
};

describe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      declarations: [ListProductsComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        provideMockStore({ initialState }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    component.initForm();
    expect(component.form.get('title')).toBeDefined();
    expect(component.form.get('category')).toBeDefined();
    expect(component.form.get('priceMin')).toBeDefined();
    expect(component.form.get('priceMax')).toBeDefined();
  });

  it('should dispatch getProductsByParams action on findByParam', () => {
    const spyDispatch = spyOn(store, 'dispatch');
    const queryParams = {
      title: 'Test Title',
      categoryId: '1',
      priceMin: '10',
      priceMax: '20',
    };

    component.findByParam(queryParams.title, queryParams.categoryId, queryParams.priceMin, queryParams.priceMax);

    expect(spyDispatch).toHaveBeenCalledWith(
      ProductsActions.getProductsByParams({
        params: queryParams,
      })
    );
  });

  it('should track products by their ID', () => {
    const product1: ProductModel = {
      id: 33,
      title: 'Tasty Fresh Bacon 123',
      price: 597,
      description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: [
        'https://picsum.photos/640/640?r=5668',
        'https://picsum.photos/640/640?r=9335',
        'https://picsum.photos/640/640?r=3472',
      ],
      creationAt: new Date('2023-09-20T00:04:54.000Z'),
      updatedAt: new Date('2023-09-20T00:04:54.000Z'),
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://picsum.photos/640/640?r=9525',
        creationAt: new Date('2023-09-20T00:04:54.000Z'),
        updatedAt: new Date('2023-09-20T00:04:54.000Z'),
      },
    };
    const product2: ProductModel = {
      id: 34,
      title: 'Handcrafted Soft Computer',
      price: 878,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: [
        'https://picsum.photos/640/640?r=7332',
        'https://picsum.photos/640/640?r=9493',
        'https://picsum.photos/640/640?r=1246',
      ],
      creationAt: new Date('2023-09-20T00:04:54.000Z'),
      updatedAt: new Date('2023-09-20T00:04:54.000Z'),
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://picsum.photos/640/640?r=7507',
        creationAt: new Date('2023-09-20T00:04:54.000Z'),
        updatedAt: new Date('2023-09-20T00:04:54.000Z'),
      },
    };

    const result1 = component.trackByProducts(0, product1);
    const result2 = component.trackByProducts(1, product2);

    expect(result1).toBe(33);
    expect(result2).toBe(34);
  });
});
