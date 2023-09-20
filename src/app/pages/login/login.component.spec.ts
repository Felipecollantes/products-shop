import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { initialState } from 'src/app/data/store/user/state';
import { provideMockStore } from '@ngrx/store/testing';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      declarations: [LoginComponent, InputComponent],
      providers: [Store, provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import * as UserActions from '../../data/store/user/actions';
// import { RootState } from 'src/app/data/store';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let store: MockStore<RootState>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       imports: [ReactiveFormsModule],
//       providers: [FormBuilder, provideMockStore()],
//     });

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     store = TestBed.inject(MockStore);
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should dispatch login action when form is valid', () => {
//     const spyDispatch = spyOn(store, 'dispatch');
//     const email = 'admin@email.com';
//     const password = 'admin123';
//     component.form.setValue({ email, password });
//     component.onSubmit();
//     expect(spyDispatch).toHaveBeenCalledWith(UserActions.login({ email, password }));
//   });

//   it('should not dispatch login action when form is invalid', () => {
//     const spyDispatch = spyOn(store, 'dispatch');
//     const email = '';
//     const password = '';
//     component.form.setValue({ email, password });
//     component.onSubmit();
//     expect(spyDispatch).not.toHaveBeenCalledWith(UserActions.login({ email, password }));
//   });

//   it('should dispatch logout action when logout is called', () => {
//     const spyDispatch = spyOn(store, 'dispatch');
//     component.logout();
//     expect(spyDispatch).toHaveBeenCalledWith(UserActions.logout());
//   });
// });
