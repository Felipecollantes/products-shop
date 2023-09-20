import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/core/constants/path.const';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public form: FormGroup;
  public inputValue = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  findByParam() {
    if (this.form.valid) {
      const { title } = this.form.value;
      const queryParams = {
        title,
      };
      this.router.navigate([`/${PATHS.listProducts}`], { queryParams: queryParams });
    }
  }
}
