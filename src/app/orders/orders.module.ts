import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderCommentComponent } from './components/order-comment/order-comment.component';


@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, FormOrderComponent, PageEditOrderComponent, OrderDetailComponent, OrderCommentComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class OrdersModule { }
