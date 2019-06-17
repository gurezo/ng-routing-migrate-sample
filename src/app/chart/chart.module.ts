import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ChartRoutingModule } from './chart-routing.module';

import { ChartComponent } from './chart.component';

@NgModule({
  imports: [CommonModule, ChartRoutingModule, SharedModule],
  declarations: [ChartComponent]
})
export class ChartModule {}
