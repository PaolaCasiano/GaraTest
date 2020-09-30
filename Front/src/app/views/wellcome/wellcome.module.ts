import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellcomeRoutingModule } from './wellcome-routing.module';
import { WellcomeComponent } from './wellcome.component';

@NgModule({
  declarations: [
    WellcomeComponent
  ],
  imports: [
    WellcomeRoutingModule,
    CommonModule
  ]
})
export class WellcomeModule { }
