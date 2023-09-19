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
  @Output() inputValue = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    // this.form = new FormGroup({
    //   search: new FormControl(''),
    // });

    this.form = this.fb.group({});
  }

  onInputChange() {
    this.inputValue.emit(this.param);
  }

  get param() {
    return this.form.controls[this.controlName].value;
  }
}
