import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductModel } from 'src/app/domain/product/models/product.model';

@Component({
  selector: 'custom-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() product = {} as ProductModel;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['product']);
  }
}
