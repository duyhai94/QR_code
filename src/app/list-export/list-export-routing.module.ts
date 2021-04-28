import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListExportPage } from './list-export.page';

const routes: Routes = [
  {
    path: '',
    component: ListExportPage
  },
  {
    path: 'detail-export',
    loadChildren: () => import('./detail-export/detail-export.module').then( m => m.DetailExportPageModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExportPageRoutingModule {}
