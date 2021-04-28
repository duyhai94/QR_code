import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, IonicModule,RouterModule],
  exports: [ButtonComponent]
})

export class ButotnModule{}