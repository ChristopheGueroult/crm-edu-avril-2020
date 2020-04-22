import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  // get collection
  public get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  // update state of item

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id from collection
}
