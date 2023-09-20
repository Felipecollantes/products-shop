import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataModule } from './data/data.module';
import { PATHS } from './core/constants/path.const';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: PATHS.home,
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: PATHS.listProducts,
    loadChildren: () => import('./pages/list-products/list-products.module').then((m) => m.ListProductsModule),
  },
  {
    path: PATHS.login,
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: PATHS.admin,
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canMatch: [AdminGuard],
  },
  {
    path: PATHS.profile,
    loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
    canMatch: [AuthGuard],
  },
  { path: '', redirectTo: `/${PATHS.home}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${PATHS.home}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, DataModule],
})
export class AppRoutingModule {}
