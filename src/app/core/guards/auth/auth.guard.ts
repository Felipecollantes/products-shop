import { Injectable } from '@angular/core';
import { CanActivateFn, CanLoad, CanMatchFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { RootState } from 'src/app/data/store';
import * as FromUser from '../../../data/store/user/selectors';

// @Injectable({ providedIn: 'root' })
// export class AuthV3Guard {
//   constructor(private store: Store<RootState>) {}

//   canMatchTeam: CanActivateFn = () => {
//     return true;
//   };

//   //   canMatchTeam: CanActivateFn = () => {
//   //     return this.store.select(FromUser.selectToken).pipe(
//   //         map(accessToken => {
//   //           if (accessToken?.access_token) return true;
//   //         //   this.routing.goRoot([SharedRoutes.introduction], { animated: true });
//   //           return false;
//   //         }),
//   //       );
//   //   };
// }

// export const canMatchTeam: CanMatchFn = () => {
//   return false;
// };

export const AuthGuard: CanActivateFn = (): // route: ActivatedRouteSnapshot,
// state: RouterStateSnapshot
boolean => {
  // const router: Router = inject(Router);
  // const tokenStorage: TokenStorageService = inject(TokenStorageService);

  // if (tokenStorage.isTokenExpired()) {
  //   return router.navigate(['forbidden']);
  // }
  // else {
  //   const roles = route.data['permittedRoles'] as Array<string>;
  //   const userRole = tokenStorage.getUserToken().role;

  //   if (roles && !roles.includes(userRole)) {
  //     return router.navigate(['login']);
  //   }
  //   else
  return false;
  // }
};
