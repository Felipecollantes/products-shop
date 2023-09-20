import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CategoryModel } from 'src/app/domain/category/models/category.mode';

@Component({
  selector: 'custom-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {
  @Input() controlName: string = '';
  @Input() form: FormGroup;
  @Input() category$: Observable<CategoryModel[]> = of([]);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }
}
