import { OrderI } from '../interfaces/order-i';
import { StatesOrder } from '../enums/states-order.enum';

export class Order implements OrderI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StatesOrder.OPTION;
  comment: string;
  constructor(param?: Partial<Order>) {
    if (param) {
      Object.assign(this, param);
    }
  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    if (this.tva <= 0) {
      return this.totalHt();
    }
    return this.totalHt() * (1 + this.tva / 100);
  }
}
