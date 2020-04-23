import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent],
  exports: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent, TemplatesModule],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
