import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailImportPageRoutingModule } from './detail-import-routing.module';

import { DetailImportPage } from './detail-import.page';
import { HeaderBackModule } from 'src/app/base/header-back/header-back.component';
import { CardBaseDetailModule } from 'src/app/base/card-detail/card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailImportPageRoutingModule,
    HeaderBackModule,
    CardBaseDetailModule
  ],
  declarations: [DetailImportPage]
})
export class DetailImportPageModule {}
