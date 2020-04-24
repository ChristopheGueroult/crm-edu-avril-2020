import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { Observable, Subject } from 'rxjs';
import { StatesOrder } from 'src/app/shared/enums/states-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  // public collection: Order[];
  public collection$ = new Subject<Order[]>();
  public headers: string[];
  public title: string;
  public subtitle: string;
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public states = Object.values(StatesOrder);
  constructor(
    private os: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });
    this.os.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });
    this.btnRoute = {label: 'Add an Order', route: 'add'};
    this.btnHref = {label: 'Search on Google', href: 'http://www.google.fr'};
    this.btnAction = {label: 'Click me', action: 'true'};
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
    ];
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public action() {
    console.log('action called');
  }

  public delete(item) {
    this.os.delete(item.id).subscribe((res) => {
      this.os.collection.subscribe((datas) => {
        this.collection$.next(datas);
      });

    });
  }

  public edit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  public detail(item: Order) {
    this.os.firstOrder$.next(item);
  }

}
