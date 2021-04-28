import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {
  @Input() headerTitle;
  @Input() headerText;
  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [HeaderBackComponent],
  imports: [CommonModule,IonicModule],
  exports: [HeaderBackComponent]
})

export class HeaderBackModule{}