import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrCodePageRoutingModule } from './qr-code-routing.module';
import { QrCodePage } from './qr-code.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { InputCodeModalComponent } from './input-code-modal/input-code-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodePageRoutingModule,
    ZXingScannerModule

  ],
  declarations: [QrCodePage,InputCodeModalComponent]
})
export class QrCodePageModule {}
