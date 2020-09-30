import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellcomeComponent } from './wellcome.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Wellcome'
    },
    children: [
      {
        path: '',
        component: WellcomeComponent,
        data: {
          title: 'Wellcome'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellcomeRoutingModule {}
