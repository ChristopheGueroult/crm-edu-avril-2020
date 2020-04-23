import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent, BtnComponent],
  exports: [TotalPipe, StateDirective, TableLightComponent, TableDarkComponent, TemplatesModule, BtnComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule
  ]
})
export class SharedModule { }
