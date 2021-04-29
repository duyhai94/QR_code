import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-condition',
  templateUrl: './modal-condition.component.html',
  styleUrls: ['./modal-condition.component.scss'],
})
export class ModalConditionComponent implements OnInit {
  value: any;
  constructor( private modal: ModalController) { }
  data = {
    title: "Ống van Spears A-System",
    list: [
      {
        value:"Thân Van"
      },
      {
        value:"Thân Van"
      },  {
        value:"Gioăng đỉnh"
      },  {
        value:"Đĩa đệm"
      },  {
        value:"Lò xo"
      },  {
        value:"Ống van"
      },
    ]
  };
  ngOnInit() {}
  closeModal(ev) {
    console.log(ev);
    this.modal.dismiss({
      'dismissed': true,
      data: ev
    });
  }
}

@NgModule({
  declarations: [ModalConditionComponent],
  imports: [CommonModule, IonicModule,],
  exports: [ModalConditionComponent]
  
})

export class ModalConditionModule{}