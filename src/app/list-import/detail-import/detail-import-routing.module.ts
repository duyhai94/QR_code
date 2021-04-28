import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailImportPage } from './detail-import.page';

const routes: Routes = [
  {
    path: '',
    component: DetailImportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailImportPageRoutingModule {}
