import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';

import { TableRoutingModule } from './table-routing.module';

import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    TableRoutingModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
