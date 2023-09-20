import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { initialState } from './data/store/user/state';
import { provideMockStore } from '@ngrx/store/testing';
import { HeaderComponent } from './layout/header/header.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      declarations: [AppComponent, HeaderComponent],
      providers: [Store, provideMockStore({})],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'products-shop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('products-shop');
  });
});

// import { AppComponent } from './app.component';
// import { Store, StoreModule } from '@ngrx/store';
// import { RootState, reducers } from './data/store';
// import * as UserActions from './data/store/user/actions';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UserModel } from './domain/user/models/user.model';
// import { HeaderComponent } from './layout/header/header.component';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let store: jasmine.SpyObj<Store<RootState>>;

//   beforeEach(() => {
//     store = jasmine.createSpyObj('Store', ['dispatch']);

//     TestBed.configureTestingModule({
//       declarations: [AppComponent, HeaderComponent],
//       providers: [{ provide: Store, useValue: store }],
//       imports: [StoreModule.forRoot(reducers)],
//     });

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should dispatch setUser action when user exists in localStorage', () => {
//     const user: UserModel = {
//       id: 1,
//       email: 'john@mail.com',
//       password: 'changeme',
//       name: 'Jhon',
//       role: 'customer',
//       avatar: 'https://picsum.photos/640/640?r=1985',
//       creationAt: new Date('2023-09-20T00:04:54.000Z'),
//       updatedAt: new Date('2023-09-20T00:04:54.000Z'),
//     };

//     // Simula que existe un usuario en localStorage
//     spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(user));

//     // Inicializa el componente
//     fixture.detectChanges();

//     // Verifica que se haya llamado a dispatch con setUser y el usuario de localStorage
//     expect(store.dispatch).toHaveBeenCalledWith(UserActions.setUser({ user }));
//   });

//   it('should not dispatch setUser action when user does not exist in localStorage', () => {
//     // Simula que no existe un usuario en localStorage
//     spyOn(localStorage, 'getItem').and.returnValue(null);

//     // Inicializa el componente
//     fixture.detectChanges();
//     const user = {} as UserModel;

//     // Verifica que no se haya llamado a dispatch con setUser
//     expect(store.dispatch).not.toHaveBeenCalledWith(UserActions.setUser({ user }));
//   });
// });
