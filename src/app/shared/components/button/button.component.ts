import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'button'
  @Input() isDisabled: boolean = false;

  getButtonClass(): string {
    return this.isDisabled ? 'disabled-button' : '';
  }
}
