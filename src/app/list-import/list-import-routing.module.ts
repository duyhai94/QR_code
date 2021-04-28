import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListImportPage } from './list-import.page';

const routes: Routes = [
  {
    path: '',
    component: ListImportPage
  },
  {
    path: 'detail-import',
    loadChildren: () => import('./detail-import/detail-import.module').then( m => m.DetailImportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListImportPageRoutingModule {}
