import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailExportPage } from './detail-export.page';

const routes: Routes = [
  {
    path: '',
    component: DetailExportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailExportPageRoutingModule {}
