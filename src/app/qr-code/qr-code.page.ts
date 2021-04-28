import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  itemDetail = new BehaviorSubject<any>(null);
  dataQR: any;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  // clearResult(): void {
  //   this.itemDetail = null;
  // }
// resultString: string
  onCodeResult(ev) {
    this.dataQR = ev
    console.log(this.dataQR);
    console.log(ev);
    this.router.navigate([this.dataQR])

    
   

    
    


    // console.log(resultString);
    // const data = {
    //   value: resultString,
    // };
    // let value = JSON.stringify(data);
    // this.itemDetail.next(JSON.parse(resultString));

  }

}
