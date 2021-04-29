import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-condition',
  templateUrl: './modal-condition.component.html',
  styleUrls: ['./modal-condition.component.scss'],
})
export class ModalConditionComponent implements OnInit {

  constructor( private modal: ModalController) { }
  data: any;
  ngOnInit() {}
  closeModal() {
    this.modal.dismiss({
      'dismissed': true

    });
  }
  getValue() {
    console.log("dddđ");
    
  }
}

@NgModule({
  declarations: [ModalConditionComponent],
  imports: [CommonModule, IonicModule,],
  exports: [ModalConditionComponent]
  
})

export class ModalConditionModule{}