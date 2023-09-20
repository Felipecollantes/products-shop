import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/domain/product/models/product.model';

@Component({
  selector: 'custom-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product = {} as ProductModel;
}
