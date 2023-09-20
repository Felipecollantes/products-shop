import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS } from 'src/app/core/constants/path.const';
import { ListProductsComponent } from './list-products.component';

const routes: Routes = [
  {
    path: `${PATHS.productDetail}/:id`,
    loadChildren: () => import('../product-detail/product-detail.module').then((m) => m.ProductDetailModule),
  },
  { path: '', component: ListProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListProductsRoutingModule {}
