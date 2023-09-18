import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataModule } from './data/data.module';
import { PATHS } from './core/constants/path.const';

const routes: Routes = [
  {
    path: PATHS.home,
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    // canLoad: [LoginGuard],
  },
  {
    path: PATHS.listProdcuts,
    loadChildren: () => import('./pages/list-products/list-products.module').then((m) => m.ListProductsModule),
    // canLoad: [LoginGuard],
  },
  { path: '', redirectTo: `/${PATHS.home}`, pathMatch: 'full' },
  { path: '**', redirectTo: `/${PATHS.home}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, DataModule],
})
export class AppRoutingModule {}
