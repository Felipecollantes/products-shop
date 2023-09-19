import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListProductsComponent],
  imports: [CommonModule, ListProductsRoutingModule, SharedModule],
})
export class ListProductsModule {}
