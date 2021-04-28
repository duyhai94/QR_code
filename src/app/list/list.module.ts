import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { HeaderBackModule } from '../base/header-back/header-back.component';
import { CardListModule } from '../base/card-list/card-list.component';
import { ButotnModule } from '../base/button/button.component';
import { CardSearchModule } from '../base/card-search/card-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    HeaderBackModule,
    CardListModule,
    ButotnModule,
    CardSearchModule
    

  ],
  declarations: [ListPage]
})
export class ListPageModule {}
