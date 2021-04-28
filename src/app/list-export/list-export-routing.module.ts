import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListExportPage } from './list-export.page';

const routes: Routes = [
  {
    path: '',
    component: ListExportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExportPageRoutingModule {}
