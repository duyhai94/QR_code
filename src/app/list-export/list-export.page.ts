import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-export',
  templateUrl: './list-export.page.html',
  styleUrls: ['./list-export.page.scss'],
})
export class ListExportPage implements OnInit {
  dataCardList = {
    list: [
      {
        serial: {
          label: "Serial",
          value: "123456"
        },
        content: {
          label: "Trạng thái",
          value: "Đang bảo dưỡng"
        }
      },
      {
        serial: {
          label: "Serial",
          value: "123456"
        },
        content: {
          label: "Trạng thái",
          value: "Đang bảo dưỡng"
        }
      },
      {
        serial: {
          label: "Serial",
          value: "123456"
        },
        content: {
          label: "Trạng thái",
          value: "Đang bảo dưỡng"
        }
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
