import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ModalConditionComponent } from '../modal-condition/modal-condition.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalCreateComponent  {
  @Input() title: string;
  @Input() config: any;
  @Input() model: any;
  binding: any;
  constructor(private modalController: ModalController) { }

  dismiss() {
      this.modalController.dismiss(this.model);
  }
  closeModal() {
      this.modalController.dismiss()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalConditionComponent,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then((res) => {
      this.binding = res.data.data
      
    })
    return await modal.present();
  }
}
@NgModule({
  declarations: [ModalCreateComponent],
  imports: [IonicModule, FormsModule, CommonModule,ReactiveFormsModule,],
  exports: [ModalCreateComponent],
})
export class ModalCreateModule { }
