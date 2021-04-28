import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() dataCard: any;
  constructor() { }

  ngOnInit() {}

}
@NgModule({
  declarations: [CardListComponent],
  imports:[CommonModule,IonicModule],
  exports: [CardListComponent]
})

export class CardListModule{}