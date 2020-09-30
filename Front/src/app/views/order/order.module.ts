import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component'
import { OrderRoutingModule } from './order-routing.module'
import { OrderCardComponent } from '../order-card/order-card.component'



@NgModule({
  declarations: [
    OrderComponent,
    OrderCardComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
