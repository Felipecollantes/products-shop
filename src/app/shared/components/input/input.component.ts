import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() controlName: string = '';
  @Input() form: FormGroup;
  @Input() placeholder: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }
}
