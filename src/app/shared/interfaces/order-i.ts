import { StatesOrder } from '../enums/states-order.enum';

export interface OrderI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StatesOrder;
  comment: string;
  totalHt(): number;
  totalTtc(): number;
}
