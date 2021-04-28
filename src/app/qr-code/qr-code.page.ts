import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ModalCreateComponent } from '../base/modal/modal.component';
import { InputCodeModalComponent } from './input-code-modal/input-code-modal.component';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  itemDetail = new BehaviorSubject<any>(null);
  dataQR: any;
  constructor(public modalController: ModalController,
                private router: Router) { }
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
  

  async createAccessories() {
    const modal = await this.modalController.create({
        component: ModalCreateComponent,
        cssClass: 'modal-create-class',
        componentProps: {
            title: 'Thêm linh kiện sử dụng',
            config: [
                {
                    condition: 'accessoriesName',
                    label: 'Linh kiện',
                    placeholder: 'Nhập tên linh kiện',
                    type: 'text',
                },
                {
                    condition: 'value',
                    label: 'Số lượng',
                    placeholder: 'Nhập số lượng',
                    type: 'number',
                },
            ],
            model: {
                accessoriesName: '',
                value: '',
            },
        },
    });
    modal.onDidDismiss().then((data) => {
        console.log(data.data);
    })

    return await modal.present();
}
  onCodeResult(ev) {
    this.dataQR = ev;
    if (this.dataQR == "linhkien") {
      // this.router.navigate(['detail-maintenance'])
      this.createAccessories()

    }


    this.router.navigate([this.dataQR])

    // console.log(this.dataQR);
    // console.log(ev);

    // console.log(resultString);
    // const data = {
    //   value: resultString,
    // };
    // let value = JSON.stringify(data);
    // this.itemDetail.next(JSON.parse(resultString));

  }

}
