import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { StatesOrder } from '../enums/states-order.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: StatesOrder;
  @HostBinding('class') tdClass: string;
  constructor() {

  }
  ngOnChanges(): void {
    // console.log(this.appState);
    this.tdClass = this.formatClass(this.appState);
  }

  public formatClass(state: StatesOrder): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}

// if appState === Annulé => state-annule
// if appState === Option => state-option
// if appState === Confirmé => state-confirme
// binder l'attribut class du host element td avec l'une de ces 3 chaines de caractères
