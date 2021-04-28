import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListImportPageRoutingModule } from './list-import-routing.module';

import { ListImportPage } from './list-import.page';
import { ButotnModule } from '../base/button/button.component';
import { HeaderBackModule } from '../base/header-back/header-back.component';
import { CardListModule } from '../base/card-list/card-list.component';
import { CardSearchModule } from '../base/card-search/card-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListImportPageRoutingModule,
    ButotnModule,
    HeaderBackModule,
    CardListModule,
    CardSearchModule
  ],
  declarations: [ListImportPage]
})
export class ListImportPageModule {}
