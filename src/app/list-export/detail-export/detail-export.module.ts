import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailExportPageRoutingModule } from './detail-export-routing.module';

import { DetailExportPage } from './detail-export.page';
import { CardBaseDetailModule } from 'src/app/base/card-detail/card-detail.component';
import { HeaderBackModule } from 'src/app/base/header-back/header-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailExportPageRoutingModule,
    CardBaseDetailModule,
    HeaderBackModule
  ],
  declarations: [DetailExportPage]
})
export class DetailExportPageModule {}
