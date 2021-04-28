import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-input-code-modal',
  templateUrl: './input-code-modal.component.html',
  styleUrls: ['./input-code-modal.component.scss'],
})
export class InputCodeModalComponent implements OnInit {
  codeInput;
  constructor(private modalController: ModalController) { }

  ngOnInit():void {
    
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  checkCode(){
    this.modalController.dismiss({
      'dismissed': true,
      codeInput: this.codeInput
    });
  }

}
