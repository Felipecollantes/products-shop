import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from 'src/app/core/constants/path.const';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  {
    path: `${PATHS.checkout}`,
    loadChildren: () => import('../checkout/checkout.module').then((m) => m.CheckoutModule),
    // canLoad: [AuthGuard],
  },
  { path: '', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailRoutingModule {}
