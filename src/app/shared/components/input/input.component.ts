import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() controlName: string = '';
  @Input() form: FormGroup;
  @Output() param = new EventEmitter<string>();

  constructor() {
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.form.controls['search']?.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe((response) => {
      this.param.emit(response);
    });
  }
}
