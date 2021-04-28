import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent implements OnInit {
  @Input() label;

  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [CardSearchComponent],
  imports: [CommonModule,IonicModule],
  exports:[CardSearchComponent]
})

export class CardSearchModule{}