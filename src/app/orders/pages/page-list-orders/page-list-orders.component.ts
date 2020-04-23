import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { Observable } from 'rxjs';
import { StatesOrder } from 'src/app/shared/enums/states-order.enum';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  // public collection: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  public title: string;
  public subtitle: string;
  public states = Object.values(StatesOrder);
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    // this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
    this.collection$ = this.os.collection;
    this.title = 'Orders';
    this.subtitle = 'All orders';
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

}
