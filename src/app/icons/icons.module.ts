import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { DeleteComponent } from './components/delete/delete.component';



@NgModule({
  declarations: [IconNavComponent, DeleteComponent],
  exports: [IconNavComponent, DeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
