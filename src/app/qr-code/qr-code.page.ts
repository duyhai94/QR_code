import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  itemDetail = new BehaviorSubject<any>(null);
  constructor() {}
  ngOnInit(): void {}
  clearResult(): void {
    this.itemDetail = null;
  }

  onCodeResult(resultString: string) {
    console.log(resultString);
    const data = {
      value: resultString,
    };
    let value = JSON.stringify(data);
    this.itemDetail.next(JSON.parse(resultString));
  }

}
