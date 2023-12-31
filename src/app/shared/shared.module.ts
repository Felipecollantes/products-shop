import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SelectorComponent } from './components/selector/selector.component';

@NgModule({
  declarations: [CardComponent, InputComponent, LoadingComponent, ButtonComponent, SelectorComponent],
  imports: [CommonModule, ReactiveFormsModule, ScrollingModule],
  exports: [
    CardComponent,
    InputComponent,
    LoadingComponent,
    ButtonComponent,
    SelectorComponent,
    ReactiveFormsModule,
    ScrollingModule,
  ],
})
export class SharedModule {}
