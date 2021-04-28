import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { InputCodeModalComponent } from './input-code-modal/input-code-modal.component';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  itemDetail = new BehaviorSubject<any>(null);
  dataQR: any;
  constructor(public modalController: ModalController) {}
  ngOnInit(): void {
  }
  // clearResult(): void {
  //   this.itemDetail = null;
  // }
// resultString: string

async presentModal() {
  const modal = await this.modalController.create({
    component: InputCodeModalComponent,
    cssClass: 'input-code-modal',
    backdropDismiss: true
  });
  modal.onDidDismiss().then((res)=>{
    console.log(res.data);
    
  })
  return await modal.present();
}
  onCodeResult(ev) {
    this.dataQR = ev
    console.log(this.dataQR);
    console.log(ev);
    // console.log(resultString);
    // const data = {
    //   value: resultString,
    // };
    // let value = JSON.stringify(data);
    // this.itemDetail.next(JSON.parse(resultString));

  }

}
