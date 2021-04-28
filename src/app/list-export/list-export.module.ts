import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListExportPageRoutingModule } from './list-export-routing.module';

import { ListExportPage } from './list-export.page';
import { ButotnModule } from '../base/button/button.component';
import { HeaderBackModule } from '../base/header-back/header-back.component';
import { CardListModule } from '../base/card-list/card-list.component';
import { CardSearchModule } from '../base/card-search/card-search.component';
import { CardBaseDetailModule } from '../base/card-detail/card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListExportPageRoutingModule,
    ButotnModule,
    HeaderBackModule,
    CardListModule,
    CardSearchModule,
    CardBaseDetailModule
  ],
  declarations: [ListExportPage]
})
export class ListExportPageModule {}
