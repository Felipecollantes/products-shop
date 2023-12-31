import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserModel } from 'src/app/domain/user/models/user.model';
import { PATHS } from '../constants/path.const';
import { ROLE } from '../enums/role-enum';

export const AdminGuard: CanActivateFn = (): boolean => {
  const router: Router = inject(Router);
  const user: UserModel = JSON.parse(`${localStorage.getItem('user')}`);
  const token = JSON.parse(`${localStorage.getItem('accessToken')}`);
  if (user && token && user.role === ROLE.ADMIN) return true;
  router.navigate([`/${PATHS.login}`]);
  return false;
};
