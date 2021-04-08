import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
