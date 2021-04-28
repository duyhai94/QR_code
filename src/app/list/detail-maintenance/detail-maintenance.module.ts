import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMaintenancePageRoutingModule } from './detail-maintenance-routing.module';

import { DetailMaintenancePage } from './detail-maintenance.page';
import { HeaderBackModule } from 'src/app/base/header-back/header-back.component';
import { CardBaseDetailModule } from 'src/app/base/card-detail/card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMaintenancePageRoutingModule,
    HeaderBackModule,
    CardBaseDetailModule
  ],
  declarations: [DetailMaintenancePage]
})
export class DetailMaintenancePageModule {}
