import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, InputComponent, ButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';
// import { Router } from '@angular/router';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';
// import { PATHS } from 'src/app/core/constants/path.const';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;
//   let router: Router;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [HomeComponent],
//       imports: [ReactiveFormsModule],
//       providers: [
//         {
//           provide: Router,
//           useValue: {
//             navigate: jasmine.createSpy('navigate'),
//           },
//         },
//       ],
//     });
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     router = TestBed.inject(Router);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should initialize the form with an empty title control', () => {
//     expect(component.form).toBeDefined();
//     expect(component.form.get('title')).toEqual(new FormControl(''));
//   });

//   it('should navigate to the product list with queryParams when findByParam is called', () => {
//     const title = 'handmade';
//     component.form.setValue({ title });

//     component.findByParam();

//     const expectedQueryParams = { title };
//     expect(router.navigate).toHaveBeenCalledWith([`/${PATHS.listProducts}`], {
//       queryParams: expectedQueryParams,
//     });
//   });
// });
