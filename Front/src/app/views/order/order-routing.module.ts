import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Orders'
    },
    children: [
      {
        path: '',
        component: OrderComponent,
        data: {
          title: 'All Orders'
        }
      },
      {
        path: 'detail/:order',
        component: OrderDetailComponent,
        data: {
          title: 'Order Detail'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
