import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '../domain/product/repositories/product.repository';
import { GetProductsUseCase } from '../domain/product/usecases/get-products.usecase';
import { ProductImplementationRepository } from './repositories/product/product-implementation.repository';
import { HttpClientModule } from '@angular/common/http';
import { GetProductDetailsUseCase } from '../domain/product/usecases/get-product-details';
import { UserRepository } from '../domain/user/repositories/user.repository';
import { UserLoginUseCase } from '../domain/user/usecases/user-login.usecase';
import { UserLogoutUseCase } from '../domain/user/usecases/user-logout.usecase';
import { UserRegisterUseCase } from '../domain/user/usecases/user-register.usecase';
import { UserImplementationRepository } from './repositories/user/user-implementation.repository';
import { GetUserProfileUseCase } from '../domain/user/usecases/get-user-profile.usecase';

const getProductsUseCaseFactory = (productRepo: ProductRepository) => new GetProductsUseCase(productRepo);
export const getProductsUseCaseProvider = {
  provide: GetProductsUseCase,
  useFactory: getProductsUseCaseFactory,
  deps: [ProductRepository],
};

const getProductDetailUseCaseFactory = (productRepo: ProductRepository) => new GetProductDetailsUseCase(productRepo);
export const getProductDetailUseCaseProvider = {
  provide: GetProductDetailsUseCase,
  useFactory: getProductDetailUseCaseFactory,
  deps: [ProductRepository],
};

const getUserLoginUseCaseFactory = (userRepo: UserRepository) => new UserLoginUseCase(userRepo);
export const getUserLoginUseCaseProvider = {
  provide: UserLoginUseCase,
  useFactory: getUserLoginUseCaseFactory,
  deps: [UserRepository],
};

const getUserLogoutUseCaseFactory = (userRepo: UserRepository) => new UserLogoutUseCase(userRepo);
export const getUserLogoutUseCaseProvider = {
  provide: UserLogoutUseCase,
  useFactory: getUserLogoutUseCaseFactory,
  deps: [UserRepository],
};

const registerUserUseCaseFactory = (userRepo: UserRepository) => new UserRegisterUseCase(userRepo);
export const registerUserUseCaseProvider = {
  provide: UserRegisterUseCase,
  useFactory: registerUserUseCaseFactory,
  deps: [UserRepository],
};

const getProfileUserUseCaseFactory = (userRepo: UserRepository) => new GetUserProfileUseCase(userRepo);
export const getProfileUserUseCaseProvider = {
  provide: GetUserProfileUseCase,
  useFactory: getProfileUserUseCaseFactory,
  deps: [UserRepository],
};

@NgModule({
  providers: [
    getProductsUseCaseProvider,
    getProductDetailUseCaseProvider,
    getUserLoginUseCaseProvider,
    getUserLogoutUseCaseProvider,
    registerUserUseCaseProvider,
    getProfileUserUseCaseProvider,
    { provide: ProductRepository, useClass: ProductImplementationRepository },
    { provide: UserRepository, useClass: UserImplementationRepository },
  ],
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
