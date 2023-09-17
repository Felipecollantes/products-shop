import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
