import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './menu/menu.module#MenuModule'
  },
  {
    path: 'chart',
    loadChildren: './chart/chart.module#ChartModule'
  },
  {
    path: 'table',
    loadChildren: './table/table.module#TableModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
