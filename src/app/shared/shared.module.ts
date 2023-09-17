import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CardComponent, InputComponent, LoadingComponent, ReactiveFormsModule],

})
export class SharedModule { }
