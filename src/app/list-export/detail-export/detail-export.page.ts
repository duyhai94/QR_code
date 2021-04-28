import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-export',
  templateUrl: './detail-export.page.html',
  styleUrls: ['./detail-export.page.scss'],
})
export class DetailExportPage implements OnInit {
  detailInfo = {
    title: 'Thông tin',
    type: 'card',
    data: [
        { name: 'Đơn vị xử lý', value: 'Phân xưởng 1', class: 'col-12' },
        { name: 'Người tạo', value: 'Nguyễn Văn A', class: 'col-12' },
        { name: 'Thời gian tạo', value: '23:59:59, 15/04/2021', class: 'col-12' },
    ],
};
  constructor() { }

  ngOnInit() {
  }

}
