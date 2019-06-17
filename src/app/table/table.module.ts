import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TableRoutingModule } from './table-routing.module';

import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableRoutingModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
