import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { DeleteComponent } from './components/delete/delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';



@NgModule({
  declarations: [IconNavComponent, DeleteComponent, IconEditComponent],
  exports: [IconNavComponent, DeleteComponent, IconEditComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
