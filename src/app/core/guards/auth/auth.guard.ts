import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { PATHS } from '../../constants/path.const';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (): boolean => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigate([`/${PATHS.home}`]);
    return false;
  }
  return true;
};
