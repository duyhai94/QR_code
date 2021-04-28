import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMaintenancePage } from './detail-maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMaintenancePageRoutingModule {}
