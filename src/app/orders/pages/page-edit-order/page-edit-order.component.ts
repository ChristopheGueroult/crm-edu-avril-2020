import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public item$: Observable<Order>;

  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'Edit an order';
    this.item$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.os.getItemById(params.get('id'))
      )
    );
  }

  public update(item: Order) {
    this.os.update(item).subscribe((res) => {
      // traiter res de l'api
      this.router.navigate(['orders']);
    });
  }

}
