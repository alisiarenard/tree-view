import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [TreeViewComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ TreeViewComponent ]
})
export class TreeModule { }
