import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardBaseDetailComponent{
  @Input() cardData;
  @Output() callBack = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [
      CardBaseDetailComponent,
  ],
  imports: [
      CommonModule,
      IonicModule
  ],
  exports: [
      CardBaseDetailComponent
  ]
})
export class CardBaseDetailModule { }