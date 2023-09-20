import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserModel } from 'src/app/domain/user/models/user.model';

export const AdminGuard: CanActivateFn = (): boolean => {
  console.log('Admin guard');
  const user: UserModel = JSON.parse(`${localStorage.getItem('user')}`);
  const token =  JSON.parse(`${localStorage.getItem('accessToken')}`);
  if(user && token && user.role === 'admin') return true
  return false;

};