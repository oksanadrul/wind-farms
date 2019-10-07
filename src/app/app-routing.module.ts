import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {ChartComponent} from './components/chart/chart.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/chart'},
  {path: 'chart', component: ChartComponent,
    children: [
      {
        path: ':id',
        component: ChartComponent,
      }
    ]
  },
  {path: 'table', component: TableComponent,
    children: [
      {
        path: ':id',
        component: TableComponent,
      }
    ]
  },
  {
    path: 'page-not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
