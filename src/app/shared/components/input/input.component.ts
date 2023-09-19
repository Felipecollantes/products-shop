import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
