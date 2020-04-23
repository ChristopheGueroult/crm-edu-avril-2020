import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { StatesOrder } from 'src/app/shared/enums/states-order.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  @Input() item = new Order();
  @Output() submited: EventEmitter<Order> = new EventEmitter();
  public form: FormGroup;
  public states = Object.values(StatesOrder);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.item.id],
      typePresta: [
        this.item.typePresta,
        Validators.required
      ],
      client: [
        this.item.client,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      tjmHt: [this.item.tjmHt],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state],
      comment: [this.item.comment]
    });
  }

  public onSubmit() {
    this.submited.emit(this.form.value);
  }

}
