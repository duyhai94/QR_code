import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMaintenanceComponent } from './detail-maintenance/detail-maintenance.component';

import { MaintenancePage } from './maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancePage
  },
  {
    path: ':id',
    component: DetailMaintenanceComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancePageRoutingModule {}
