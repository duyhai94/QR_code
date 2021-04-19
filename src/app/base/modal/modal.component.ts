import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalCreateComponent  {
  @Input() title: string;
  @Input() config: any;
  @Input() model: any;
  constructor(private modalController: ModalController) { }

  dismiss() {
      this.modalController.dismiss(this.model);
  }
  closeModal() {
      this.modalController.dismiss()
  }
}
@NgModule({
  declarations: [ModalCreateComponent],
  imports: [IonicModule, FormsModule, CommonModule],
  exports: [ModalCreateComponent],
})
export class ModalCreateModule { }
