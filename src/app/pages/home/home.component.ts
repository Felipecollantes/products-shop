import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from 'src/app/core/constants/path.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public form: FormGroup;
  public inputValue = '';

  constructor(private router: Router) {
    this.form = new FormGroup({
      title: new FormControl(''),
    });
  }

  findByParam() {
    const { title } = this.form.value;
    const queryParams = {
      title,
    };
    this.router.navigate([`/${PATHS.listProdcuts}`], { queryParams: queryParams });
  }
}
