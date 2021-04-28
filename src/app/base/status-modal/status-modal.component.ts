import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.scss'],
})
export class StatusModalComponent implements OnInit {
  @Input() model: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }
  
  dismiss() {
    this.modalController.dismiss(this.model);
  }
  closeModal() {
      this.modalController.dismiss()
  }

}
